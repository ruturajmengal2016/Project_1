import React from "react";
import Style from "./Styles/Home.module.css";
const Home = () => {
  return (
    <div className={Style.root}>
      <h1 className={Style.heading}>
        "Take care of your <span style={{ color: "red" }}>body</span>. it's the
        only place you have to
        <span style={{ color: "red" }}> live.</span>"
      </h1>
    </div>
  );
};

export default Home;
