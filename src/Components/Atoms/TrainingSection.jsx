import React, { useRef } from "react";
import Style from "../Styles/Training.module.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ImageBlock from "./ImageBlock";
const TrainingSection = () => {
  const div = useRef();
  let images = [
    "https://images.pexels.com/photos/14591555/pexels-photo-14591555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14623660/pexels-photo-14623660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7322502/pexels-photo-7322502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/14591580/pexels-photo-14591580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6739127/pexels-photo-6739127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        <ImageBlock
          img1={images[0]}
          name="Adam Klocko"
          profession="Nutrition Coach"
        />
        <ImageBlock
          img1={images[1]}
          name="Mark Jacobi"
          profession="Wellness Coach"
        />
        <ImageBlock
          img1={images[2]}
          name="Shanel Crooks"
          profession="massage therapist"
        />
        <ImageBlock
          img1={images[3]}
          name="Elna Reilly"
          profession="Lifestyle guru"
        />
        <ImageBlock
          img1={images[4]}
          name="Emilia Nicolas"
          profession="Athletic Coach"
        />
        <ImageBlock
          img1={images[5]}
          name="Elliot Barrett"
          profession="Athletic Coach"
        />
        <ImageBlock
          img1={images[6]}
          name="Leighton Norman"
          profession="Athletic Coach"
        />
      </div>
      <Button
        variant="outlined"
        onClick={() => {
          div.current.scrollLeft += 700;
        }}
        className={Style.button}
      >
        SEE THE WHOLE TEAM
      </Button>
    </div>
  );
};

export default TrainingSection;
