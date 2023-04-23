import React from "react";
import Style from "../Styles/Pricing.module.css";
import { BsArrowRight } from "react-icons/bs";
const Third = () => {
  return (
    <div className={Style.third}>
      <h1 style={{ textDecoration: "underline", textDecorationColor: "red" }}>
        Membership
      </h1>
      <h1>From Punch Pass to Monthly Or Annual</h1>
      <p>
        At Gym Base, we offer a wide range of membership with options to suit
        every budget. Everything from One Day Pass. Punch Pass to monthly or
        annual prepaid memberships What's more we won't the you in to a long
        term contract. giving you greater flexibilty.
      </p>
      <h1>Each Plan Included</h1>
      <ul>
        <li>
          <BsArrowRight size={25} color="green" />{" "}
          <span style={{ fontSize: "1.1rem" }}>
            The best equipment global brand
          </span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" />{" "}
          <span style={{ fontSize: "1.1rem" }}>
            The gym open 24 hours a day, 7 days a week
          </span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" />{" "}
          <span style={{ fontSize: "1.1rem" }}>Two safe payment methods</span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" />{" "}
          <span style={{ fontSize: "1.1rem" }}>
            Group fitness classes in the price of subscription
          </span>
        </li>
        <li>
          <BsArrowRight size={25} color="green" />
          <span style={{ fontSize: "1.1rem" }}>
            No long-term contract period
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Third;