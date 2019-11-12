/* eslint-disable no-console */
const config = require("./config");
const knex = require("knex")(config.db);
const models = require("./models")(knex);
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

const app = express();
let data = models.restaurants;

app.use(morgan("dev"));
app.use(cors());

const schema = buildSchema(`

  input RestaurantInput {
    business_id: String
    name: String
    address: String
    city: String
    state: String
    postal_code: String
    stars: Float
    categories: String
    latitude: String
    longitude: String
  }
  
  type Restaurant {
    business_id: String
    name: String
    address: String
    city: String
    state: String 
    postal_code: String
    stars: Float
    categories: String
    latitude: String
    longitude: String
  }

  type Query {
    Restaurants: [Restaurant]
    Restaurant(business_id: String): Restaurant
    RestaurantBy(name: String city: String postal_code: String stars: Float categories: String ): [Restaurant]
    RandomRestaurantBy(city: String state: String name: String postal_code: String stars: Float categories: String ): Restaurant
  }

  type Mutation {
    CreateRestaurant(input: RestaurantInput!): [Restaurant]
    UpdateRestaurant(business_id: String input: RestaurantInput!): [Restaurant]
    DeleteRestaurant(business_id: String): [Restaurant]
  }
`);

const root = {
  Restaurants: () => {
    return data.list();
  },
  Restaurant: async request => {
    const restaurantData = await data.list();
    if (request.business_id)
      return restaurantData.find(
        restaurant => restaurant.business_id === request.business_id
      );
  },
  RestaurantBy: async request => {
    let restaurantData = await data.list();
    if (request.name) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.name.indexOf(request.name) !== -1;
      });
    }
    if (request.stars) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.stars >= request.stars;
      });
    }
    if (request.postal_code) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.postal_code.indexOf(request.postal_code) !== -1;
      });
    }
    if (request.city) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.city.indexOf(request.city) !== -1;
      });
    }
    if (request.categories) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.categories.indexOf(request.categories) !== -1;
      });
    }
    return restaurantData;
  },
  RandomRestaurantBy: async request => {
    let restaurantData = await data.list();
    if (request.name) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.name.indexOf(request.name) !== -1;
      });
    }
    if (request.stars) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.stars >= request.stars;
      });
    }
    if (request.city) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.city.indexOf(request.city) !== -1;
      });
    }
    if (request.state) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.state.indexOf(request.state) !== -1;
      });
    }
    if (request.postal_code) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.postal_code === request.postal_code;
      });
    }
    if (request.categories) {
      restaurantData = restaurantData.filter(restaurant => {
        return restaurant.categories.indexOf(request.categories) !== -1;
      });
    }
    return restaurantData[Math.floor(Math.random() * restaurantData.length)];
  },
  CreateRestaurant: async request => {
    const addedRestaurant = {};
    for (const key in request.input) {
      addedRestaurant[key] = request.input[key];
    }
    let restaurantData = await data.list();
    restaurantData.push(addedRestaurant);
    restaurantData = data.create(addedRestaurant);
    return restaurantData;
  },
  UpdateRestaurant: async request => {
    let restaurantData = await data.list();
    const foundRestaurant = restaurantData.find(
      restaurant => restaurant.business_id === request.business_id
    );
    for (const key in request.input) {
      foundRestaurant[key] = request.input[key];
    }
    restaurantData = await data.update(foundRestaurant);
    return restaurantData;
  },
  DeleteRestaurant: async request => {
    let restaurantData = await data.list();
    restaurantData = data.delete(request.business_id);
    return restaurantData;
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

app.use(express.static(`${__dirname}/public`));

app.listen(4000, () => {
  console.log(`Server up and listening on port 4000`);
});

module.exports = { schema, express };
