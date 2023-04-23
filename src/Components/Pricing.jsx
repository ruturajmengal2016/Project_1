import React from "react";
import Style from "./Styles/Pricing.module.css";
import First from "./Atoms/First";
import Second from "./Atoms/Second";
import Third from "./Atoms/Third";

const Pricing = () => {
  return (
    <div className={Style.root}>
      <First />
      <Second />
      <Third />
    </div>
  );
};

export default Pricing;
