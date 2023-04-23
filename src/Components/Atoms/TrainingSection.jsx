import React, { useRef } from "react";
import Style from "../Styles/Training.module.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ImageBlock from "./ImageBlock";
import AdamKlocko from "../Images/AdamKlocko.jpeg";
import ElnaReilly from "../Images/ElnaReilly.jpeg";
import EmiliaNicolas from "../Images/EmiliaNicolas.jpeg";
import LeightonNorman from "../Images/LeightonNorman.jpeg";
import MarkJacobi from "../Images/MarkJacobi.jpeg";
import ElliotBarrett from "../Images/ElliotBarrett.jpeg";
import ShanelCrooks from "../Images/ShanelCrooks.jpeg";
const TrainingSection = () => {
  const div = useRef();
  const array = [
    { img: AdamKlocko, name: "Adam Klocko", coach: "Nutrition Coach" },
    { img: MarkJacobi, name: "Mark Jacobi", coach: "Wellness Coach" },
    { img: ShanelCrooks, name: "Shanel Crooks", coach: "massage therapist" },
    { img: ElnaReilly, name: "Elna Reilly", coach: "Lifestyle guru" },
    { img: EmiliaNicolas, name: "Emilia Nicolas", coach: "Athletic Coach" },
    { img: ElliotBarrett, name: "Elliot Barrett", coach: "Athletic Coach" },
    { img: LeightonNorman, name: "Leighton Norman", coach: "Athletic Coach" },
  ];
  return (
    <div className={Style.root}>
      <Typography variant="h4">MEET OUR TEAM</Typography>
      <div className={Style.trainers_wrap}>
        <p className={Style.discription}>
          loremOfficia eu amet incididunt voluptate deserunt, do excepteur
          exercitation irure sint ut tempor ex. <br />
          adipisicing. Elit elit incididunt amet est exercitation, ad enim
          cillum commodo aute culpa cupidatat est amet.
        </p>
      </div>

      <div
        className={Style.trainers}
        ref={div}
        onMouseOver={() => {
          div.current.scrollLeft -= 700;
        }}
      >
        {array.map((ele, ind) => {
          return (
            <ImageBlock
              key={ind}
              img={ele.img}
              name={ele.name}
              profession={ele.coach}
            />
          );
        })}
      </div>
      <Button
        className={Style.button}
        variant="outlined"
        onClick={() => {
          div.current.scrollLeft += 700;
        }}
      >
        SEE THE WHOLE TEAM
      </Button>
    </div>
  );
};

export default TrainingSection;
