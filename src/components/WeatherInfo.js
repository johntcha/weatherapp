import React, { useState, useEffect } from "react";
import moment from "moment";
import getWeather from "../data/Apicall";
import CityPicker from './CityPicker';

const WeatherInfo = (props) => {
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

  const getDayName = (dateStr, locale) =>
  {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
  }

  const capitalize = (word) => {
  if (typeof word !== 'string') return ''
  return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const formatteddate = moment(new Date()).format("YYYY-MM-DD");
  console.log();
  return (
    <div className="">
      {weatherData !== null ? (
        <>
          <CityPicker
          cityName = {cityName}
          setCityName = {setCityName}
          capitalize = {capitalize}
          />
          <h2>{cityName}</h2>
          <div>

            {/*displays the first next day info
              when the last info of the current day dissapear
              around 10PM*/}

            {window.location.pathname === "/" &&
              weatherData.list[0].dt_txt.includes(formatteddate) === false && (
                <>
                <ul>
                  <li>{getDayName(weatherData.list[0].dt_txt, 'en-US')}</li>
                  <li>{weatherData.list[0].dt_txt}</li>
                  <li>{Math.round(weatherData.list[0].main.temp - 273.15) + "°C"}</li>
                  <li>{weatherData.list[0].weather[0].description}</li>
                </ul>
                </>
              )}

            {weatherData.list.map((item) => {
              const tempDegree = Math.round(item.main.temp - 273.15) + "°C";
              const dayName = capitalize(getDayName(item.dt_txt, 'en-US'));
              if (
                window.location.pathname === "/" &&
                item.dt_txt.includes(formatteddate) === true
              )
                return (
                  <>
                  <ul>
                    <li key={item.dt + item}>{dayName}</li>
                    <li>{item.dt_txt}</li>
                    <li>{tempDegree}</li>
                    <li>{item.weather[0].description}</li>
                  </ul>
                  </>
                );
            })}

            {weatherData.list.map((item) => {
              const tempDegree = Math.round(item.main.temp - 273.15) + "°C";
              const dayName = capitalize(getDayName(item.dt_txt, 'en-US'));
              if (
                window.location.pathname === "/week" &&
                item.dt_txt.includes(formatteddate) === false
              )
                return (
                  <>
                  <ul>
                    <li key={item.dt}>{dayName}</li>
                    <li>{item.dt_txt}</li>
                    <li>{tempDegree}</li>
                    <li>{item.weather[0].description}</li>
                  </ul>
                  </>
                );
            })}
            </div>
        </>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
