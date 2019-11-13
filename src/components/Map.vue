<template>
  <div id="map">
    <GmapMap 
      ref="myMap"
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 500px "
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in blueMarkers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        :icon="icon"
        @click="center=m.position"
      />
      <GmapMarker
        :key="'A' + index"
        v-for="(m, index) in redMarkers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
    <label>
      <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
      <button @click="addMarker">Add</button>
    </label>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "Map",
  data() {
    return {
      center: { lat: 40, lng: -100 },
      zoom: 4,
      icon: { url: require("../assets/blue_marker.png") },
      blueMarkers: [],
      redMarkers: [],
      places: [],
      currentLocation: null,
      currentRestaurant: null
    };
  },

  props: {
    info: {
      id: Number,
      restaurantName: String,
      restaurantAddress: String,
      restaurantCity: String,
      restaurantState: String,
      restaurantPostal: String,
      restaurantStars: Number,
      restaurantCategories: String,
      restaurantLatitude: String,
      restaurantLongitude: String
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
       this.currentLocation = place;
    },
    async addMarker() {
      if (this.currentLocation) {
        const markerA = {
          lat: this.currentLocation.geometry.location.lat(),
          lng: this.currentLocation.geometry.location.lng()
        };
        this.blueMarkers.pop();
        this.blueMarkers.push({ position: markerA });
        this.places.push(this.currentLocation);
        this.center = markerA;
      }
      if (this.info.restaurantAddress) {
        const markerB = {
          lat: parseFloat(this.info.restaurantLatitude),
          lng: parseFloat(this.info.restaurantLongitude)
        };
        this.redMarkers.pop();
        this.redMarkers.push({ position: markerB });
        this.places.push(this.info.restaurantAddress);
        this.center = markerB;
        this.zoom = 10;
      }
      if (this.info.restaurantAddress && this.currentLocation) {
        this.getRoute();
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude)
        };
      });
    },
    async getRoute() {
        const directionsService =  new window.google.maps.DirectionsService()
        const directionsDisplay =  new window.google.maps.DirectionsRenderer()
        const stepDisplay = new window.google.maps.InfoWindow;
        const map = this.$refs.myMap.$mapObject
        directionsDisplay.setMap(map)
        directionsDisplay.set('directions', null)
        directionsService.route(
         {
           origin: {lat: this.blueMarkers[0].position.lat, lng: this.blueMarkers[0].position.lng},
           destination: {lat: this.redMarkers[0].position.lat, lng: this.redMarkers[0].position.lng},
           travelMode: window.google.maps.DirectionsTravelMode.DRIVING
         },
         function(response, status) {
            if (status == window.google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
              this.showSteps(response, this.blueMarkers, stepDisplay, map);
            }
          }
        );
        
    },
  }
};
</script>

<style>
</style>