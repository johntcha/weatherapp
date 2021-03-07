import React from "react";
import Switcher from "../components/Switcher";
import WeatherInfo from "../components/WeatherInfo";

const Week = () => {
  return (
    <>
      <Switcher />
      <WeatherInfo
      urlName = {"/week"}
      cond = {false}
      />
    </>
  );
};

export default Week;
