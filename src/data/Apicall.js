import axios from "axios";

const api = {
  urlCity : "http://api.openweathermap.org/geo/1.0/direct?",
  urlLoc: "https://api.openweathermap.org/data/2.5/onecall?",
  key: "7631b01852113e5fda798e015b140736",
};

export const getLoc = async (cityName) => {
  try {
    const { data } = await axios.get(
      api.urlCity + `q=${cityName}&appid=${api.key}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export const getWeather = async (lat, lon ) => {
  try {
    const { data } = await axios.get(
      api.urlLoc + `lat=${lat}&lon=${lon}&appid=${api.key}`
      );
    return data;
  } catch (e) {
    throw e;
  }
};
