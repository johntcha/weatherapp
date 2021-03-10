import React, { useState } from "react";

const CityPicker = (props) => {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setCityName(value);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        City :
        <input
          type="text"
          placeholder="Write your city name"
          value={props.capitalize(value)}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Search" data-testid="submit"/>
    </form>
    <h2 data-testid="city">{props.cityName}</h2>
    </>
  );
};

export default CityPicker;
