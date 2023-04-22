import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "./Styles/Navigation.module.css";
import Button from "@mui/material/Button";
import { GiHamburgerMenu } from "react-icons/gi";
const Navigation = () => {
  const [value, setValue] = useState(true);
  const navigate = useNavigate();
  return (
    <div className={Style.root}>
      <h2
        onClick={() => {
          navigate("/home");
        }}
        style={{ cursor: "pointer" }}
      >
        GYM
      </h2>
      <div
        className={value ? `${Style.routes}` : `${Style.routes} ${Style.hide}`}
      >
        <Link to="/home" className={Style.link}>
          Home
        </Link>
        <Link to="/about" className={Style.link}>
          About Us
        </Link>
        <Link to="/program" className={Style.link}>
          Program
        </Link>
        <Link to="/training" className={Style.link}>
          Training
        </Link>
        <Link to="/pricing" className={Style.link}>
          Pricing
        </Link>
      </div>
      <Button
        onClick={() => {
          navigate("/login");
        }}
        variant="contained"
        sx={{ backgroundColor: "blue" }}
        className={Style.button}
      >
        Join Us
      </Button>
      <GiHamburgerMenu
        size={30}
        className={Style.menu}
        onClick={() => {
          setValue(!value);
        }}
      />
    </div>
  );
};

export default Navigation;
