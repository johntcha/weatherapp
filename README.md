# ReactJS Weather App

This project was done with ReactJS and [OpenWeather API](https://openweathermap.org/).

![alt text](https://github.com/johntcha/weatherapp/blob/main/public/weatherapp.PNG?raw=true)


## Context

Done at the beginning of my internship at Capgemini in order to apply ReactJS knowledges.

## Modules

Modules used in this project are:

### `axios` 

Used in order to fetch API data

### `momentjs` 

Used in order to simplify date format conversion

### `material UI` 

Used for the Buttons

## Principle

The web app has 3 pages : Today's weather, Week's weather and Not found.

Path between these pages are managed by React Router.

### Fetch the API data

Getting the right data is divided in two parts.

The first data I am fetching are the geographic coordinates (lat, lon) of a city with this endpoint : `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`.

Once geographic coordinates acquired, the program implement them in another endpoint (`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`), in which I can get the weather data of the day and of the week.

### Country Picker

In order to choose a city, I needed a form to enter a city name. Thanks to the Open Weather API, country can be found whether the language used.
The function fetching the data will receive the city name and will implement it in the API endpoint in order to repeat the process written above.


### Switcher

The switcher part allow the visitor to navigate between today and this week weather.

### Background Weather

The background changes according to the current weather. 
I just fetched the weather result and implement into a className and added a background image for (almost) each of them.

### Test with Jest, React Testing Library and Cypress
