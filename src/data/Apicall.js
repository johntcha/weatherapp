import axios from "axios";

const api = {
  url: "http://api.openweathermap.org/data/2.5/forecast?",
  key: "8aa27bfce3724b30676b40aff500135b",
};

const getWeather = async (cityName) => {
  try {
    const { data } = await axios.get(
      api.url + `q=${cityName}&appid=${api.key}`
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export default getWeather;
