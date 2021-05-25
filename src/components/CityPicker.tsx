import React, { useState } from "react";

type CityPickerProps = {
  cityName: string
  setCityName: Function
  capitalize: Function
}

const CityPicker = (props: CityPickerProps) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event): void => {
    setValue(event.target.value);
  };
  const handleSubmit = (event): void => {
    event.preventDefault();
    props.setCityName(value);
  };

  return (
    <>
      <form data-testid="citySubmit" onSubmit={handleSubmit}>
        <label>
          City :
          <input
            type="text"
            placeholder="Write your city name"
            value={props.capitalize(value)}
            onChange={handleChange}
            data-testid="cityField"
          />
        </label>
        <input type="submit" value="Search" data-testid="submit" />
      </form>
      <h2 data-testid="city">{props.cityName}</h2>
    </>
  );
};

export default CityPicker;
