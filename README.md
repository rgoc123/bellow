# Bellow!


Welcome to Bellow, a Yelp-like application that gives the power to the people when searching for the best places to eat. In Bellow, you are able to sign up, browse restaurants, write reviews, and filter for the perfect restaurant.

Visit the website here: [Bellow!](https://bellowtheapp.herokuapp.com/#/)

![alt text](./app/assets/images/landing_page.png)

## Technologies
The application uses Rails and ActiveRecord for handling the backend because of their efficiency in reducing the number of queries on the database. React is used for its enhanced UI that re-renders just components that have changed as opposed to entire pages. And Redux is used for its state management, which was very helpful on pages like “search” that have multiple components (e.g. the search bar, price filters, index, and map) accessing different slices of state.

The app also implements Google Maps and uses several of its features, such as tracking latitude/longitude changes and creating interactive markers.

## Features
#### Core Features
There are several important features beyond being able to view a list of restaurants: user authorization, multiple avenues for site navigation, creating/updating/deleting reviews, and filtering.

Filtering takes place on the search page. Because the data sample is small and the search bar needs access to all of the businesses for its fuzzy search, filtering by price and search input occurs on the frontend, which allows for greater speed and doesn’t require the map component to remount every time a filter is changed (only its markers change).

#### New Features!!
Two exciting features were added recently. 1) The ability to interact with the Google Maps API by hovering over markers to see which restaurant they belong to and clicking the marker to navigate to the restaurant's page. 2) By implementing the material-UI JavaScript library, the search bar now has a fuzzy filter that speeds up both search and navigation by pre-populating a list of results with clickable dropdown items that can take you to search results for the cuisine you're looking for or directly to a restaurant's page.

###### Map Marker Hover and Click
![alt text](./app/assets/images/map_hover.gif)

###### Search Bar Fuzzy Filter and Click
![alt text](./app/assets/images/fuzzy_filter.gif)


## Coming Soon
Updates to come will include a user profile page, the abilities to like reviews and "favorite" restaurants, and a filter for restaurants that are currently open.

I'm excited for you to explore the app and code, and I welcome any feedback you have!
