import React, { useContext } from "react";
import Style from "../Styles/Pricing.module.css";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import Button from "@mui/material/Button";
import { dataRoot } from "../../App";
const First = () => {
  const navigate = useNavigate();
  const { details, setDetails,setData,data } = useContext(dataRoot);
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
      <Button
        variant="contained"
        className={Style.button}
        onClick={() => {
          if (details.text === "JOIN US") {
            navigate("/register");
          }
          if (details.text === "subscribed") {
            setDetails({ ...details, text: "Get Started", subscribed: true });
            navigate("/home");
          }
        }}
      >
        {details.subscribed ? details.text : details.text}
      </Button>
    </div>
  );
};

export default First;
