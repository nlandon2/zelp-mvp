export const getters = {
  getRestaurants(state) {
    return state.restaurants;
  },
  getCurrentView(state) {
    return state.currentView;
  },
  getStateInput(state) {
    return state.stateInput;
  },
  getNameInput(state) {
    return state.nameInput;
  },
  getCityInput(state) {
    return state.cityInput;
  },
  getZipInput(state) {
    return state.zipInput;
  },
  getCategoryInput(state) {
    return state.categoryInput;
  },
  getStarInput(state) {
    return state.starInput;
  },
  getDistanceInput(state) {
    return state.distanceInput;
  }
};
