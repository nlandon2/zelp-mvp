<template>
  <div id="map">
    <GmapMap :center="center" :zoom="8" map-type-id="terrain" style="width: 100%; height: 500px ">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
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
import { gmapApi } from "vue2-google-maps";

export default {
  name: "Map",
  data() {
    return {
      center: { lat: 38.9, lng: -77 },
      markers: [],
      places: [],
      currentLocation: null
    };
  },
  computed: {
    google: gmapApi
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
      restaurantLocation: Object
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentLocation = place;
    },
    addMarker() {
      if (this.currentLocation) {
        const marker = {
          lat: this.currentLocation.geometry.location.lat(),
          lng: this.currentLocation.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentLocation);
        this.center = marker;
        this.currentLocation = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
</style>