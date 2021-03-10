import React from "react";
import TodaysWeatherContent from "../components/today/TodaysWeatherContent";
import { render, getByTestId } from "@testing-library/react";
import moment from "moment";

it("should be the date of today", () => {
  const weatherData = {
    hourly: [
      {
        dt: Date.now(),
        temp: 294.81,
        feels_like: 289.75,
        pressure: 1012,
        humidity: 17,
        dew_point: 269.23,
        uvi: 0,
        clouds: 0,
        visibility: 10000,
        wind_speed: 3.58,
        wind_deg: 128,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        pop: 0,
      },
    ],
  };

  const { getByTestId } = render(
    <TodaysWeatherContent
      weatherData={weatherData}
      capitalize={() => null}
      date={"24"}
      convertIntoDate={(timestamp) =>
        moment(new Date(timestamp).toString()).format("L")
      }
      getDayName={() => null}
    />
  );
  const currentDay = getByTestId("today");
  expect(currentDay).toHaveTextContent(
    moment(new Date(Date.now()).toString()).format("L")
  );
});
