import React, {useState, useEffect} from 'react'
import getWeather from '../data/Apicall'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Switcher from '../components/Switcher';
import moment from 'moment';
import TodaysWeather from '../components/Today/TodaysWeather'

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

 const formatteddate = moment(new Date).format('YYYY-MM-DD');
 // console.log(formatteddate);

    return (
    	<>
    	<Switcher />
        <TodaysWeather 
        weatherData = {weatherData}
        formatteddate = {formatteddate}
        />
        </>
    );
};


export default Today;
