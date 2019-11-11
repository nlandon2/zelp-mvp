<template>
  <div id="app">
    <h1>ZELP</h1>
    <button @click="getRestaurant">Get Restaurant</button>
    <div v-if="$store.getters['getCurrentView'] === 'filterView'" class="dataSet">
      <div>{{`Name: ${restaurantName}`}}</div>
      <div>{{`Address: ${restaurantAddress}`}}</div>
      <div>{{`${restaurantCity}, ${restaurantState} ${restaurantPostal}`}}</div>
      <div>{{`${restaurantStars} Stars`}}</div>
      <div>{{`Categories: ${restaurantCategories.replace(/;/g, ', ').replace("Restaurants,","").replace(", Restaurants","")}`}}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      restaurantName: "",
      restaurantAddress: "",
      restaurantCity: "",
      restaurantState: "",
      restaurantPostal: "",
      restaurantStars: "",
      restaurantCategories: ""
    };
  },
  methods: {
    async getRestaurant() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `{
        RandomRestaurantBy(city: "Toronto") {
          business_id
          name
          address
          city
          state
          postal_code
          stars
          categories
        }
      }`
      });
      this.restaurantName = res.data.data.RandomRestaurantBy.name;
      this.restaurantAddress = res.data.data.RandomRestaurantBy.address;
      this.restaurantCity = res.data.data.RandomRestaurantBy.city;
      this.restaurantState = res.data.data.RandomRestaurantBy.state;
      this.restaurantPostal = res.data.data.RandomRestaurantBy.postal_code;
      this.restaurantStars = res.data.data.RandomRestaurantBy.stars;
      this.restaurantCategories = res.data.data.RandomRestaurantBy.categories;
    }
  }
};
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
</style>
