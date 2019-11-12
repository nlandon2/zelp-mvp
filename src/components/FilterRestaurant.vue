<template>
  <div class="filter">
    <div class="title">
      <h3>Filter Restaurants:</h3>
    </div>
    <form name="filter" class="formFilter">
      <div class="filterCity">
        <label class="title">Name:</label>
        <br />
        <input type="text" v-model="nameInput" name="name" />
        <br />
        <label class="title">State:</label>
        <br />
        <input type="text" v-model="stateInput" name="state" />
        <br />
        <label class="title">City:</label>
        <br />
        <input type="text" v-model="cityInput" name="city" />
        <br />
        <label class="title">Zip Code:</label>
        <br />
        <input type="text" v-model="zipInput" name="zip" />
        <br />
        <label class="title">Minimum Stars:</label>
        <br />
        <input type="text" v-model="starInput" name="star" />
        <br />
        <label class="title">What kind of food?:</label>
        <br />
        <input type="text" v-model="categoryInput" name="category" />
        <br />
        <label class="title">Current Location:</label>
        <br />
        <input type="text" v-model="locationInput" name="location" />
        <br />
        <label class="title">Maximum Distance (miles):</label>
        <br />
        <input type="text" v-model="distanceInput" name="distance" />
        <br />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FilterRestaurant",
  computed: {
    stateInput: {
      get() {
        return this.$store.state.stateInput;
      },
      set(stateInput) {
        this.$store.commit("setStateInput", stateInput);
      }
    },
    cityInput: {
      get() {
        return this.$store.state.cityInput;
      },
      set(cityInput) {
        this.$store.commit("setCityInput", cityInput);
      }
    },
    nameInput: {
      get() {
        return this.$store.state.nameInput;
      },
      set(nameInput) {
        this.$store.commit("setNameInput", nameInput);
      }
    },
    zipInput: {
      get() {
        return this.$store.state.zipInput;
      },
      set(zipInput) {
        this.$store.commit("setZipInput", zipInput);
      }
    },
    starInput: {
      get() {
        return this.$store.state.starInput;
      },
      set(starInput) {
        this.$store.commit("setStarInput", starInput);
      }
    },
    categoryInput: {
      get() {
        return this.$store.state.categoryInput;
      },
      set(categoryInput) {
        this.$store.commit("setCategoryInput", categoryInput);
      }
    },
    locationInput: {
      get() {
        return this.$store.state.locationInput;
      },
      set(locationInput) {
        this.$store.commit("setLocationInput", locationInput);
      }
    },
    distanceInput: {
      get() {
        return this.$store.state.distanceInput;
      },
      set(distanceInput) {
        this.$store.commit("setDistanceInput", distanceInput);
      }
    }
  }
};
</script>