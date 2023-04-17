import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Navigation.module.css";
import Button from "@mui/material/Button";
import { GiHamburgerMenu } from "react-icons/gi";
const Navigation = () => {
  const [value, setValue] = useState(false);
  return (
    <div className={Style.root}>
      <h2>GYM</h2>
      <div
        className={
          value
            ? `${Style.routes} ${Style.show}`
            : `${Style.routes} ${Style.hide}`
        }
      >
        <Link to="/" className={Style.link}>
          Home
        </Link>
        <Link className={Style.link}>About Us</Link>
        <Link className={Style.link}>Classes</Link>
        <Link className={Style.link}>Blogs</Link>
      </div>
      <Button
        variant="contained"
        sx={{ backgroundColor: "blue" }}
        className={
          value
            ? `${Style.button} ${Style.show}`
            : `${Style.button} ${Style.hide}`
        }
      >
        Join Us
      </Button>
      <GiHamburgerMenu
        className={Style.menu}
        onClick={() => {
          setValue(!value);
        }}
      />
    </div>
  );
};

export default Navigation;
