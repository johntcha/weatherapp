import axios from "axios";

interface apiType {
  urlCity: string
  urlLoc: string
  key: string
}
const api: apiType = {
  urlCity: "http://api.openweathermap.org/geo/1.0/direct?",
  urlLoc: "https://api.openweathermap.org/data/2.5/onecall?",
  key: "7631b01852113e5fda798e015b140736",
};

export const getLoc = async (cityName: string): Promise<any> => {
  try {
    const { data }: any = await axios.get(
      api.urlCity + `q=${cityName}&appid=${api.key}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export const getWeather = async (lat: string, lon: string): Promise<any> => {
  try {
    const { data }: any = await axios.get(
      api.urlLoc + `lat=${lat}&lon=${lon}&appid=${api.key}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};
