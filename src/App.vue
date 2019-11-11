<template>
  <div id="app">
    <h1>ZELP</h1>
    <l-map ref="myMap"></l-map>
  </div>
</template>

<script>
import { LMap } from "vue2-leaflet";
//import axios from "axios";

export default {
  name: "app",
  components: {
    LMap
  },
  data: () => ({
    data: null
  }),
  mounted() {
    this.$nextTick(() => {
      this.$refs.myMap.mapObject.LMap();
    });
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
