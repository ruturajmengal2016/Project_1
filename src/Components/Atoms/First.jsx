import React from "react";
import Style from "../Styles/Pricing.module.css";
import { BsCheckCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
const First = () => {
  return (
    <div className={Style.first}>
      <h2>Day Pass</h2>
      <div className={Style.number}>
        <sup>$</sup>20
      </div>
      <em>/pass</em>
      <ul>
        <li>
          <BsCheckCircle /> 1 Day Pass
        </li>
        <li>
          <BsCheckCircle /> Free Gym Access
        </li>
        <li>
          <BsCheckCircle /> 24 Hours Access
        </li>
      </ul>
        <Button variant="contained" className={Style.button}>
          Get Started
        </Button>
    </div>
  );
};

export default First;
