import React, { useState, useEffect, Suspense } from "react";
import moment from "moment";
import { getWeather, getLoc } from "../data/Apicall";
import CityPicker from "./CityPicker";

const WeatherInfo = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("Paris");
  const [coord, setCoord] = useState({ lat: "48.8534", lon: "2.3488" });
  const [bgCss, setBgCss] = useState([]);

  const WeeksWeatherContent = React.lazy(() => import('./week/WeeksWeatherContent'));
  const TodaysWeatherContent = React.lazy(() => import('./today/TodaysWeatherContent'));

  useEffect(() => {
    const getData = async () => {
      try {
        const dataLoc = await getLoc(cityName);

        setCoord({ lat: dataLoc[0].lat, lon: dataLoc[0].lon });
        const weatherData = await getWeather(coord.lat, coord.lon);

        setWeatherData(weatherData);
        setBgCss(weatherData.hourly[0].weather[0].main);
        console.log(weatherData);
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
  }, [cityName, JSON.stringify(coord)]);

  const convertIntoDate = (timestamp) => {
    let d = new Date(timestamp * 1000);
    let n = d.toString();
    return n;
  };
  const getDayName = (dateStr, locale) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  const capitalize = (word) => {
    if (typeof word !== "string") return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const formatteddate = moment(new Date(),"ddd MMM DD YYYY").format("ddd MMM DD YYYY");
  // console.log(formatteddate);
  return (
    <div className={`weather-content ${bgCss}`}>
      <CityPicker
        cityName={cityName}
        setCityName={setCityName}
        capitalize={capitalize}
      />

      {weatherData !== null && window.location.pathname === "/" ? (
        <Suspense fallback={<span>Loading...</span>}>
        <TodaysWeatherContent
          weatherData={weatherData}
          capitalize={capitalize}
          date={formatteddate}
          convertIntoDate={convertIntoDate}
          getDayName={getDayName}
        />
        </Suspense>
      ) : null}
      {weatherData !== null && window.location.pathname === "/week" ? (
        <Suspense fallback={<span>Loading...</span>}>
        <WeeksWeatherContent
          weatherData={weatherData}
          capitalize={capitalize}
          date={formatteddate}
          convertIntoDate={convertIntoDate}
          getDayName={getDayName}
        />
        </Suspense>
      ) : null}
    </div>
  );
};

export default WeatherInfo;
