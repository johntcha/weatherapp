import React from "react";
import CityPicker from "../components/CityPicker";
import { render, getByPlaceholderText, getByTestId, screen, getByText, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("testing the CityPicker", ()=>{
	it("should return Paris by default on title", () => {
  const mockFunction = jest.fn();
  const { getByTestId } = render(
  	<CityPicker 
  	cityName={'Paris'}
    setCityName={mockFunction}
    capitalize={mockFunction}
  	/>);
  const city = screen.getByTestId("city");
  expect(city).toHaveTextContent('Paris');
});

	it("should trigger the form by click", () => {
		const mockFunction = jest.fn();
		const inputValue = "Tokyo";
		const { getByTestId } = render(
	  	<CityPicker 
	  	cityName={'Paris'}
	    setCityName={mockFunction}
	    capitalize={() => 'salut'}
	  	/>);
  		fireEvent.click(getByTestId('submit'));
  		expect(mockFunction).toBeCalled();
	});

  it("should trigger the form by enter", async () =>  {
    const mockFunction = jest.fn();
    const inputValue = "Tokyo";
    const { getByTestId, getByPlaceholderText } = render(
      <CityPicker 
      cityName={'Paris'}
      setCityName={mockFunction}
      capitalize={() => 'salut'}
      />);
      fireEvent.change(getByTestId('cityField'), { target: { value: inputValue } });
      fireEvent.submit(getByPlaceholderText('Write your city name'));
      expect(mockFunction).toBeCalled();
  });
})
