import React from "react";
import moment from "moment";

type weatherData = {
  hourly: Array<any> 
}

type TodaysWeatherContentProps = {
  weatherData: weatherData
  capitalize: Function 
  date: string
  convertIntoDate: Function
  getDayName: Function
}

const TodaysWeatherContent = (props: TodaysWeatherContentProps) => {
  console.log(props.weatherData)
  const [getList0, ...array]: Array<any> = props.weatherData.hourly;
  const rightDateFormat: string = moment(props.convertIntoDate(getList0.dt),/*"MM/DD/YYYY"*/).format(
    "L"
  );
  const feelsLike: string = Math.round(getList0.feels_like - 273.15) + "°C";
  const currentTime: string = moment(new Date(),"HH:mm").format("LT");

  return (
    <>
      <div className="today-details-card">
        <ul>
          <li data-testid="today">{rightDateFormat}</li>
          <li>{currentTime}</li>
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
            <i className="far fa-compass"></i> {getList0.wind_deg + "°"}
          </li>
          <li>
            <i className="fas fa-wind"></i> {getList0.wind_speed + " m/s"}
          </li>
        </ul>
      </div>

      <div className="today-weather-card">
        {props.weatherData.hourly.map((item) => {
          const tempDegree: string = Math.round(item.temp - 273.15) + "°C";
          const dayName: string  = props.capitalize(
            props.getDayName(props.convertIntoDate(item.dt), "en-US")
          );
          const iconNum: string  = item.weather[0].icon;
          const hour: string  = moment(props.convertIntoDate(item.dt), "HH:mm").format("LT");

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
