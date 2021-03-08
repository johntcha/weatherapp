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
    <form onSubmit={handleSubmit}>
      <label>
        City :
        <input
          type="text"
          value={props.capitalize(value)}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default CityPicker;
