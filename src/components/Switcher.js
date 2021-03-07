import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Switcher = () => {
  return (
    <div className="switcher">
      <h1>Weather App</h1>
      <NavLink to="/" exact activeClassName="navActive">
        <Button variant="contained" color="primary">
          Today
        </Button>
      </NavLink>
      <NavLink to="/week" activeClassName="navActive">
        <Button variant="contained" color="primary">
          Week
        </Button>
      </NavLink>
    </div>
  );
};

export default Switcher;
