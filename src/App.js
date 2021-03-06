import './App.css';
import React, {useState, useEffect} from 'react'
import Today from './pages/Today';
import Week from './pages/Week';
import NotFound from './pages/NotFound';
import getWeather from './data/Apicall'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
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
    <Today
    setCityName = {setCityName}
    getData = {getData} />
    <Week />
    <NotFound />

    {
      weatherData !== null ? (
        <div>
          {weatherData.weather[0].main}
        </div>) : null
    }


    <BrowserRouter>
        <Switch>
      <Route path="/" exact component={Today} />
      <Route path="/week" component={Week} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
    </>
  )
};

export default App;
