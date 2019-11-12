export const mutations = {
  setRestaurants(state, restaurants) {
    state.restaurants = restaurants;
  },
  setCurrentView(state, view) {
    state.currentView = view;
  },
  setStateInput(state, value) {
    state.stateInput = value;
  },
  setCityInput(state, city) {
    state.cityInput = city;
  },
  setNameInput(state, name) {
    state.nameInput = name;
  },
  setZipInput(state, zip) {
    state.zipInput = zip;
  },
  setCategoryInput(state, category) {
    state.categoryInput = category;
  },
  setStarInput(state, stars) {
    state.starInput = stars;
  },
  setLocationInput(state, location) {
    state.locationInput = location;
  },
  setDistanceInput(state, distance) {
    state.distanceInput = distance;
  }
};
