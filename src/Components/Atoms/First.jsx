import React from "react";
import Style from "../Styles/Pricing.module.css";
import {BsCheckCircle} from "react-icons/bs";
const First = () => {
  return (
    <div className={Style.first_one}>
      <span id={Style.one}>Day Pass</span>
      <span id={Style.two}>
        <sup>$</sup> 20
      </span>
      <em id={Style.three}>/pass</em>
      <ul id={Style.four}>
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
      <button>Get Started</button>
    </div>
  );
};

export default First;
