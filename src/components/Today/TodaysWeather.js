import React, { PropTypes } from 'react';

const TodaysWeather = (props) => {
    return (
        <div className="">
        {
      props.weatherData !== null ? (
      	<>
      	<h2>
      	{props.weatherData.name}
      	</h2>
        <ul>
          {props.weatherData.list.map((item)=>{
          	if(item.dt_txt.includes(props.formatteddate) == true)
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
    );
};

export default TodaysWeather;
