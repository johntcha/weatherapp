import React, { useState, useEffect } from "react";
import moment from "moment";
import getWeather from "../data/Apicall";
import CityPicker from "./CityPicker";
import TodaysWeatherContent from "./today/TodaysWeatherContent";
import WeeksWeatherContent from "./week/WeeksWeatherContent";

const WeatherInfo = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Paris");
  const [bgCss, setBgCss] = useState();

  const getData = async () => {
    try {
      const data = await getWeather(cityName);
      const bgCssProperty = await getWeather(cityName);

      setWeatherData(data);
      setBgCss(bgCssProperty.list[0].weather[0].main);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, [cityName]);

  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  const capitalize = (word) => {
    if (typeof word !== "string") return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const formatteddate = moment(new Date()).format("YYYY-MM-DD");
  return (
    <>
      {weatherData !== null && window.location.pathname === "/" ? (
        <div className={`weather-content-today ${bgCss}`}>
          <CityPicker
            cityName={cityName}
            setCityName={setCityName}
            capitalize={capitalize}
          />
          <h2>{cityName}</h2>

          <TodaysWeatherContent
            weatherData={weatherData}
            capitalize={capitalize}
            date={formatteddate}
            getDayName={getDayName}
          />
        </div>
      ) : null}
      {weatherData !== null && window.location.pathname === "/week" ? (
        <div className="weather-content-week">
          <CityPicker
            cityName={cityName}
            setCityName={setCityName}
            capitalize={capitalize}
          />
          <h2>{cityName}</h2>
          <WeeksWeatherContent
            weatherData={weatherData}
            capitalize={capitalize}
            date={formatteddate}
            getDayName={getDayName}
          />
        </div>
      ) : null}
    </>
  );
};

export default WeatherInfo;
