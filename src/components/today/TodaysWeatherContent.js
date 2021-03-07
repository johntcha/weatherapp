import React, { useState } from "react";

const TodaysWeatherContent = (props) => {
  const getList0 = props.weatherData.list[0];
  return (
    <>
      <div className="today-details-card">
        <ul>
          <li>Humidity</li>
          <li>
            <i class="fas fa-tint"></i> {getList0.main.humidity + "%"}
          </li>
        </ul>
        <ul>
          <li>Wind</li>
          <li>
            <i class="far fa-compass"></i> {getList0.wind.deg + "°"}
          </li>
          <li>
            <i class="fas fa-wind"></i> {getList0.wind.speed + " m/s"}
          </li>
        </ul>
      </div>
      <div className="today-weather-card">
        {/*displays the first next day info
              when the last info of the current day dissapear
              around 10PM*/}

        {props.weatherData.list[0].dt_txt.includes(props.date) === false && (
          <>
            <ul>
              <li>{props.getDayName(getList0.dt_txt, "en-US")}</li>
              <li>{getList0.dt_txt}</li>
              <li>{Math.round(getList0.main.temp - 273.15) + "°C"}</li>
              <li>{getList0.weather[0].description}</li>
              <img
                src={`http://openweathermap.org/img/wn/${getList0.weather[0].icon}@2x.png`}
                alt={getList0.weather[0].description}
              />
            </ul>
          </>
        )}
      </div>
      <div className="today-weather-card">
        {props.weatherData.list.map((item) => {
          const tempDegree = Math.round(item.main.temp - 273.15) + "°C";
          const dayName = props.capitalize(
            props.getDayName(item.dt_txt, "en-US")
          );
          const iconNum = item.weather[0].icon;
          if (
            window.location.pathname === "/" &&
            item.dt_txt.includes(props.date) === true
          )
            return (
              <>
                <ul>
                  <li key={item.dt + item}>{dayName}</li>
                  <li>{item.dt_txt}</li>
                  <li>{tempDegree}</li>
                  <li>{item.weather[0].description}</li>
                  <img
                    src={`http://openweathermap.org/img/wn/${iconNum}@2x.png`}
                    alt={item.weather[0].description}
                  />
                </ul>
              </>
            );
        })}
      </div>
    </>
  );
};

export default TodaysWeatherContent;
