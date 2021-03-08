import React from "react";
import moment from "moment";

const WeeksWeatherContent = (props) => {
  return (
    <div className="week-weather-card">
      {props.weatherData.daily.map((item) => {
        const tempDegree = Math.round(item.temp.day - 273.15) + "°C";
        const dayName = props.capitalize(
          props.getDayName(props.convertIntoDate(item.dt), "en-US")
        );
        const iconNum = item.weather[0].icon;
        const rightDateFormat = moment(props.convertIntoDate(item.dt)).format('L');

          return (
            <>
              <ul>
                <li key={item.dt}>{dayName}</li>
                <li>{rightDateFormat}</li>
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
  );
};

export default WeeksWeatherContent;
