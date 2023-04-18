import React from "react";
import Style from "../Styles/Pricing.module.css";
import { BsArrowRight } from "react-icons/bs";
const Third = () => {
  return (
    <div className={Style.first_third}>
      <h3>Membership</h3>
      <h2>From Punch Pass to Monthly Or Annual</h2>
      <p>
        At Gym Base, we offer a wide range of membership with options to suit
        every budget. Everything from One Day Pass. Punch Pass to monthly or
        annual prepaid memberships What's more we won't the you in to a long
        term contract. giving you greater flexibilty.
      </p>
      <h2>Each Plan Included</h2>
      <ul>
        <li>
          <BsArrowRight size={25} color="green" /> <span>The best equipment global brand</span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" /> <span>The gym open 24 hours a day, 7 days a week</span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" /> <span>Two safe payment methods</span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" /> <span>Group fitness classes in the price of subscription</span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" />
          No long-term contract period
        </li>
      </ul>
    </div>
  );
};

export default Third;
