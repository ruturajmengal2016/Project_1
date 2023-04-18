import React from "react";
import Style from "../Styles/Pricing.module.css";
import { BsCheckCircle } from "react-icons/bs";
const Second = () => {
  return (
    <div className={Style.first_second}>
      <span id={Style.one}>Month to Month</span>
      <span id={Style.two}>
        <sup>$</sup> 90
      </span>
      <em id={Style.three}>/month</em>
      <ul id={Style.four}>
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
      <button>Get Started</button>
    </div>
  );
};

export default Second;
