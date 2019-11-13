# Zelp

This was created during my time as a student at Code Chrysalis.

Zelp is an app that decides a restaurant to eat for you if you cannot decide.


## How to Use

In the filter restaurants section, just input something in any of the categories, unless you want a completely random restaurant in any city. You are free to filter in however many inputs you choose. When you're ready, click "I'm feeling lucky" and it will pick a random restaurant based on the filters, and it should show a red cursor in the map. 

You can also type in above the Filter Restaurants subheader your own location, which should create a blue cursor in the map. 

If both cursors are in the map, basic directions to get from your location to the restaurant will automatically appear. Text and steps will be added eventually.



## Development

Follow this guide to set up your environment.

### Database

Create a postgres database called `yelp`.

Update the config.js file in the project root to create your own username and password.

`yarn server` runs the GraphQL server, while `yarn serve` runs the client server. Both are necessary to run at the same time for the app to work.

Please use `yarn migrate`, `yarn rollback`, and `yarn seed` for managing the data in the database.

This app also uses the Google Maps API. In `./src/main.js`, you have to input your own API key, which can be obtained by signing up as a Google Developer.

## Technologies

![technologies](https://user-images.githubusercontent.com/54035352/68725835-fd718d00-0602-11ea-8ff5-0b5802a5d841.png)


## Heroku

Work in progress: https://zelp-mvp.herokuapp.com/

## Future features

For now, there is only the random restaurant feature, and it shows only the most basic directions from your current location to the restaurant.

First, I want to make it more seamless by automatically creating a restaurant marker when pressing the random button, rather than only being able to do it with the Add button.

Second, I want to create more detailed instructions, such as traffic, text describing what route to take, options such as driving and walking, alternative routes, and showing steps.

Third, I want it to give more information about the place, and have a feature that lists all of the restaurants that fit the filters.
