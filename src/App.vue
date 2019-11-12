
<template>
  <div id="app">
    <h1>ZELP</h1>
    <Map />
    <FilterRestaurant />
    <button @click="getRandomRestaurant">Get Restaurant</button>
    <ListRestaurant v-if="$store.getters['getCurrentView']==='ListView'" :info="info" />
  </div>
</template>
<script>
/* eslint-disable no-console */
import axios from "axios";
import ListRestaurant from "./components/ListRestaurant";
import FilterRestaurant from "./components/FilterRestaurant";
import Map from "./components/Map";

export default {
  name: "app",
  data() {
    return {
      info: {
        restaurantName: "",
        restaurantAddress: "",
        restaurantCity: "",
        restaurantState: "",
        restaurantPostal: "",
        restaurantStars: 0,
        restaurantCategories: ""
      }
    };
  },
  components: {
    ListRestaurant,
    FilterRestaurant,
    Map
  },

  computed: {
    currentView() {
      return this.$store.state.currentView;
    }
  },
  methods: {
    async getRandomRestaurant() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `
        query RandomRestaurantBy($restaurantName: String $restaurantCity: String $restaurantZip: String $restaurantState: String $restaurantStars: Float $restaurantCategories: String) {
          RandomRestaurantBy(name: $restaurantName city: $restaurantCity postal_code: $restaurantZip state: $restaurantState stars: $restaurantStars categories: $restaurantCategories) {
            name
            address
            city
            state
            postal_code
            stars
            categories
          }
        }`,
        variables: {
          restaurantName: this.$store.getters["getNameInput"],
          restaurantCity: this.$store.getters["getCityInput"],
          restaurantZip: this.$store.getters["getZipInput"],
          restaurantState: this.$store.getters["getStateInput"],
          restaurantStars: parseFloat(this.$store.getters["getStarInput"]),
          restaurantCategories: this.$store.getters["getCategoryInput"]
        }
      });
      this.info.restaurantName = res.data.data.RandomRestaurantBy.name;
      this.info.restaurantAddress = res.data.data.RandomRestaurantBy.address;
      this.info.restaurantCity = res.data.data.RandomRestaurantBy.city;
      this.info.restaurantState = res.data.data.RandomRestaurantBy.state;
      this.info.restaurantPostal = res.data.data.RandomRestaurantBy.postal_code;
      this.info.restaurantStars = res.data.data.RandomRestaurantBy.stars;
      this.info.restaurantCategories = res.data.data.RandomRestaurantBy.categories.replace(
        /;/g,
        ", "
      );
      this.$store.commit("setCurrentView", "ListView");
      console.log(this.$store.getters["getZipInput"]);
    }
  }
};

/* eslint-enable no-console */
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: darkblue;
}

button {
  display: inline-block;
  max-width: 180px;
  text-align: left;
  border: 2px solid #62792e;
  font-size: 20px;
  color: #62792e;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: 0.4s;
  /* height: 2rem; */
}

button:hover {
  background-color: #62792e;
  border-color: #738d35;
  color: #fff;
}

html,
body,
#app {
  height: 200%;
}
body {
  margin: 0;
}
</style>
