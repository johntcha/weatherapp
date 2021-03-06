import React, {useState, useEffect} from 'react'
import getWeather from '../data/Apicall'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Switcher from '../components/Switcher';
import moment from 'moment';

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
        <div className="">
        {
      weatherData !== null ? (
      	<>
      	<h2>
      	{weatherData.name}
      	</h2>
        <ul>
          {weatherData.list.map((item)=>{
          	if(item.dt_txt.includes(formatteddate) == true)
          	return(
          		<>
          		<li key={item.dt}>
          	{item.dt_txt}
          	</li>
          		<li key={item.dt + 1}>
          	{item.weather[0].description}
          	</li>
          	</>
          	)
          	
          })}
        </ul>
        </>
        ) : null
    }
        </div>
        </>
    );
};


export default Today;
