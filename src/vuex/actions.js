import axios from "axios";

export const actions = {
  async getRestaurants({ commit }) {
    const { data: restaurants } = await axios.post(
      "http://localhost:4000/graphql",
      {
        query: `{
        Restaurants{
          business_id
          name
          address
          city
          state
          postal_code
          stars
          categories
          latitude
          longitude
        }
      }`
      }
    );
    commit("setRestaurants", restaurants);
  }
};
