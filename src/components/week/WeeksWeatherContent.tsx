import React from "react";
import moment from "moment";

interface weatherData {
  daily: Array<any> 
}

interface WeeksWeatherContentProps {
  weatherData: weatherData
  capitalize: Function
  date: string
  convertIntoDate: Function
  getDayName: Function
}

const WeeksWeatherContent = (props: WeeksWeatherContentProps) => {
  return (
    <div className="week-weather-card">
      {props.weatherData.daily.map((item) => {
        const tempDegree: string = Math.round(item.temp.day - 273.15) + "°C";
        const dayName: string = props.capitalize(
          props.getDayName(props.convertIntoDate(item.dt), "en-US")
        );
        const iconNum: string = item.weather[0].icon;
        const rightDateFormat: string = moment(props.convertIntoDate(item.dt)).format(
          "L"
        );

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
