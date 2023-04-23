import React from "react";
import { BsArrowRight } from "react-icons/bs";
const ImageBlock = ({ img1, name, profession }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={img1}
        alt="images"
        style={{ height: "15rem", width: "15rem", objectFit: "cover" }}
      />
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {name}
        <BsArrowRight size={30} fill="green" />
      </span>
      <span>{profession}</span>
    </div>
  );
};

export default ImageBlock;
