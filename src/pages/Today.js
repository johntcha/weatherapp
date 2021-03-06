import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Switcher from "../components/Switcher";
import moment from "moment";
import WeatherInfo from "../components/WeatherInfo";

const Today = () => {
  return (
    <>
      <Switcher />
      <WeatherInfo />
    </>
  );
};

export default Today;
