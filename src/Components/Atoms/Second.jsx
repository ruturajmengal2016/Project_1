import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "../Styles/Pricing.module.css";
import { BsCheckCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
import { dataRoot } from "../../App";
const Second = () => {
  const { details, setDetails } = useContext(dataRoot);
  const navigate = useNavigate();
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
      <Button
        variant="contained"
        className={Style.button}
        onClick={() => {
          if (details.text === "JOIN US") {
            navigate("/register");
          }
          if (details.text === "subscribed") {
            setDetails({ ...details, subscribed: true, text:"Get Started"});
            navigate("/home");
          }
        }}
      >
        {details.subscribed ? details.text : details.text}
      </Button>
    </div>
  );
};

export default Second;
