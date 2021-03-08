import React, { useState, useEffect } from "react";
import moment from "moment";
import {getWeather, getLoc} from "../data/Apicall";
import CityPicker from "./CityPicker";
import TodaysWeatherContent from "./today/TodaysWeatherContent";
import WeeksWeatherContent from "./week/WeeksWeatherContent";

const WeatherInfo = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Paris");
  const [lat, setLat] = useState('48.856614');
  const [lon, setLon] = useState('2.3522219');
  const [bgCss, setBgCss] = useState();

  const getData = async () => {
    try {
      const dataLoc = await getLoc(cityName);
      // const latCity = await getLoc(cityName);
      // const lonCity = await getLoc(cityName);
      // const bgCssProperty = await getLoc(cityName);
      const weatherData = await getWeather(lat, lon);
      setLat(dataLoc[0].lat);
      setLon(dataLoc[0].lon);
      setWeatherData(weatherData);
      setBgCss(weatherData.hourly[0].weather[0].main);
      console.log(weatherData);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, [cityName, lat]);

  const convertIntoDate = (timestamp) => {
    let d = new Date(timestamp * 1000);
    let n = d.toString();
    return n;

  }
  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  const capitalize = (word) => {
    if (typeof word !== "string") return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const formatteddate = moment(new Date()).format("ddd MMM DD YYYY");
  // console.log(formatteddate);
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
            convertIntoDate = {convertIntoDate}
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
            convertIntoDate ={convertIntoDate}
            getDayName={getDayName}
          />
        </div>
      ) : null}
      
    </>
  );
};

export default WeatherInfo;
