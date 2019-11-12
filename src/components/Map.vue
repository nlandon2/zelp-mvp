<template>
  <div id="map">
    <GmapMap
      :center="{lat:39, lng:-77}"
      :zoom="5"
      map-type-id="terrain"
      style="width: 100%; height: 500px "
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "Map",
  computed: {
    google: gmapApi
  }
};
</script>

<style>
</style>