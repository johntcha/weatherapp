import React, {useState, useEffect} from 'react'
import getWeather from '../data/Apicall'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Switcher from '../components/Switcher';

const Today = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('paris');

  const getData = async () => {
    try{
      const data = await getWeather(cityName);
      setWeatherData(data);
      console.log(data);
    }catch(e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

    return (
    	<>
    	<Switcher />
        <div className="">
        {
      weatherData !== null ? (
      	<>
      	<h2>
      	{weatherData.name}
      	</h2>
        <h3>
          {weatherData.weather[0].main}
        </h3>
        </>
        ) : null
    }
        </div>
        </>
    );
};


export default Today;
