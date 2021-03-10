import React from "react";
import CityPicker from "../components/CityPicker";
import { render, getByTestId, screen, getByText, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("testing the CityPicker", ()=>{
	it("should return Paris by default", () => {
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

	it("should trigger the form", () => {
		const mockFunction = jest.fn();
		const inputValue = "Tokyo";
		const { getByTestId } = render(
	  	<CityPicker 
	  	cityName={'Paris'}
	    setCityName={mockFunction}
	    capitalize={() => 'salut'}
	  	/>);
		fireEvent.change(getByTestId('submit'), { target: { value: inputValue } });
  		fireEvent.click(getByTestId('submit'));
  		// following line returns error
  		// expect(mockFunction).not.toBeCalled();
  		expect(mockFunction).toBeCalled();
	})
})
