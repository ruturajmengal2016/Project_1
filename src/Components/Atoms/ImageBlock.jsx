import React from "react";
import { BsArrowRight } from "react-icons/bs";
const ImageBlock = ({ img, name, profession }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={img}
        alt="images"
        style={{ height: "15rem", minWidth: "15rem", objectFit: "cover" }}
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
