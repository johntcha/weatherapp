import React from "react";
import Switcher from "../components/Switcher";
import { render, getByText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("should be redirecting to /week", () => {
  const { getByText } = render(<Switcher />, { wrapper: MemoryRouter });
  const navigation = getByText("Week");
  expect(getByText("Week").closest("a")).toHaveAttribute("href", "/week");
});

it("should be redirecting to /", () => {
  const { getByText } = render(<Switcher />, { wrapper: MemoryRouter });
  const navigation = getByText("Today");
  expect(getByText("Today").closest("a")).toHaveAttribute("href", "/");
});
