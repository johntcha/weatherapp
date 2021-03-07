import React from "react";

const WeeksWeatherContent = (props) => {
  return (
    <div className="week-weather-card">
      {props.weatherData.list.map((item) => {
        const tempDegree = Math.round(item.main.temp - 273.15) + "°C";
        const dayName = props.capitalize(
          props.getDayName(item.dt_txt, "en-US")
        );
        const iconNum = item.weather[0].icon;
        if (item.dt_txt.includes(props.date) === false)
          return (
            <>
              <ul>
                <li key={item.dt}>{dayName}</li>
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
  );
};

export default WeeksWeatherContent;
