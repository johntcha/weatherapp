import React from "react";
import moment from "moment";

const TodaysWeatherContent = (props) => {
  const getList0 = props.weatherData.hourly[0];
  const rightDateFormat = moment(props.convertIntoDate(getList0.dt)).format('L');
  const feelsLike = Math.round(getList0.feels_like - 273.15) + "°C";
  const currentDate = moment(new Date()).format('LT');
  
  return (
    <>
      <div className="today-details-card">
      <ul>
          <li>{rightDateFormat}</li>
          <li>{currentDate}</li>
          <li>Feels like {feelsLike}</li>
        </ul>
        <ul>
          <li>Humidity</li>
          <li>
            <i className="fas fa-tint"></i> {getList0.humidity + "%"}
          </li>
        </ul>
        <ul>
          <li>Wind</li>
          <li>
            <i className="far fa-compass"></i> {getList0.wind_deg+ "°"}
          </li>
          <li>
            <i className="fas fa-wind"></i> {getList0.wind_speed + " m/s"}
          </li>
        </ul>
      </div>
      
      <div className="today-weather-card">
        {props.weatherData.hourly.map((item) => {
          const tempDegree = Math.round(item.temp - 273.15) + "°C";
          const dayName = props.capitalize(
            props.getDayName(
props.convertIntoDate(item.dt), "en-US")
          );
          const iconNum = item.weather[0].icon;
          const hour = moment(props.convertIntoDate(item.dt)).format('LT');
          
          if (
            window.location.pathname === "/" &&
            props.convertIntoDate(item.dt).includes(props.date) === true
          )
            return (
              <>
                <ul>
                  <li key={item.dt + item}>{dayName}</li>
                  <li>{hour}</li>
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
