<template>
  <div id="app">
    <h1>ZELP</h1>
    <div>Data: {{ example1 }}</div>
    <button @click="getRestaurant">Get Restaurant</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      example1: ""
    };
  },
  methods: {
    async getRestaurant() {
      const res = await axios.post("http://localhost:4000/graphql", {
        query: `{ Restaurants {
        business_id
        name
        address
        city
        state
        stars
        categories
      } }`
      });
      this.example1 = res.data.data.Restaurants[0];
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
