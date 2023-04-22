import React from "react";
import Style from "../Styles/Pricing.module.css";
import { BsCheckCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
const Second = () => {
  return (
    <div className={Style.second}>
      <h2>Month to Month</h2>
      <span className={Style.number}>
        <sup>$</sup> 90
      </span>
      <em>/month</em>
      <ul>
        <li>
          <BsCheckCircle color="green" /> $99 joing fee
        </li>
        <li>
          <BsCheckCircle color="green" /> No Contact
        </li>
        <li>
          <BsCheckCircle color="green" /> Free gym access
        </li>
        <li>
          <BsCheckCircle color="green" /> 1 Group class Included
        </li>
        <li>
          <BsCheckCircle color="green" /> 24 Hours Access
        </li>
      </ul>
      <Button variant="contained" className={Style.button}>
        Get Started
      </Button>
    </div>
  );
};

export default Second;
