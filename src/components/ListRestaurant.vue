<template>
  <div class="dataSet">
    <h2>RESULTS</h2>
    <div>{{`Name: ${info.restaurantName.replace(/^"(.*)"$/, '$1')}`}}</div>
    <div>{{`Address: ${info.restaurantAddress.replace(/^"(.*)"$/, '$1')}`}}</div>
    <div>{{`${info.restaurantCity}, ${info.restaurantState} ${info.restaurantPostal}`}}</div>
    <div>{{`${info.restaurantStars} Stars`}}</div>
    <div>{{`Categories: ${info.restaurantCategories}`}}</div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "ListRestaurant",
  props: {
    info: {
      id: Number,
      restaurantName: String,
      restaurantAddress: String,
      restaurantCity: String,
      restaurantState: String,
      restaurantPostal: String,
      restaurantStars: Number,
      restaurantCategories: String
    }
  }
};
</script>