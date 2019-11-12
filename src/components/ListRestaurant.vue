<template>
  <div class="dataSet">
    <div>{{`Name: ${info.restaurantName}`}}</div>
    <div>{{`Address: ${info.restaurantAddress}`}}</div>
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