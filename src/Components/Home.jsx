import React, { useEffect, useContext } from "react";
import Style from "./Styles/Home.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { dataRoot } from "../App";
const Home = () => {
  const navigate = useNavigate();
  const { details, setDetails } = useContext(dataRoot);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      setDetails({ ...details, text: "JOIN US" });
    }
    if (user !== null) {
      user.find((ele, ind) => {
        if (ele.email && !ele.subscribed) {
          setDetails({ ...details, text: "subscribed" });
        }
        if (ele.email && ele.subscribed) {
          setDetails({ ...details, text: "Get Started" });
        }
      });
    }
  }, []);
  return (
    <div className={Style.root}>
      <h1 className={Style.heading}>
        "Take care of your <span style={{ color: "red" }}>body</span>. it's the
        only place you have to
        <span style={{ color: "red" }}> live.</span>"
        <Button
          variant="contained"
          style={{
            position: "absolute",
            top: "12rem",
            left: "0rem",
            backgroundColor: "red",
          }}
          onClick={() => {
            if (details.text === "subscribed") {
              navigate("/pricing");
            }
            if (details.text === "JOIN US") {
              navigate("/register");
            }
            if (details.text === "subscribed" && details.subscribed) {
              navigate("/training");
            }
          }}
        >
          {details.subscribed ? "Get Started" : details.text}
        </Button>
      </h1>
    </div>
  );
};

export default Home;
