import React from 'react'
import TodaysWeatherContent from '../components/today/TodaysWeather';
import { render, getById } from '@testing-library/react';
import moment from "moment";

//have to use mock to copy the API data
it('should be the date of today', () => {
	const {getById} = render(<TodaysWeather/>);
	const currentDay = getById("today");
	expect(currentDay).ToBe(moment((new Date(Date.now() * 1000)).toString()).format("L"));
});
