import React from "react";
import Style from "./Pricing.module.css";
import First from "./Atoms/First";
import Second from "./Atoms/Second";
import Third from "./Atoms/Third";
const Pricing = () => {
  return (
    <div className={Style.root}>
      <div className={Style.first}>
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
};

export default Pricing;
