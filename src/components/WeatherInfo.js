import React, { useState, useEffect } from "react";
import moment from "moment";
import getWeather from "../data/Apicall";
import CityPicker from './CityPicker';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Paris");

  const getData = async () => {
    try {
      const data = await getWeather(cityName);
      setWeatherData(data);
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, [cityName]);

  const formatteddate = moment(new Date()).format("YYYY-MM-DD");
  // console.log(formatteddate);
  return (
    <div className="">
      {weatherData !== null ? (
        <>
          <CityPicker
          cityName = {cityName}
          setCityName = {setCityName}
          />
          <h2>{cityName}</h2>
          <ul>
            {/*displays the first next day info
          when the last info of the current day dissapear
          around 10AM*/}
            {window.location.pathname === "/" &&
              weatherData.list[0].dt_txt.includes(formatteddate) === false && (
                <>
                  <li>{weatherData.list[0].dt_txt}</li>
                  <li>{weatherData.list[0].weather[0].description}</li>
                </>
              )}

            {weatherData.list.map((item) => {
              if (
                window.location.pathname === "/" &&
                item.dt_txt.includes(formatteddate) === true
              )
                return (
                  <>
                    <li key={item.dt}>{item.dt_txt}</li>
                    <li key={item.dt + 1}>{item.weather[0].description}</li>
                  </>
                );
            })}

            {weatherData.list.map((item) => {
              if (
                window.location.pathname === "/week" &&
                item.dt_txt.includes(formatteddate) === false
              )
                return (
                  <>
                    <li key={item.dt}>{item.dt_txt}</li>
                    <li key={item.dt + 1}>{item.weather[0].description}</li>
                  </>
                );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
