import React, { useRef } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
const Carousel = () => {
  const slide = useRef();
  return (
    <div>
      <div
        ref={slide}
        style={{
          display: "flex",
          overflow: "auto",
          objectFit: "cover",
          position: "relative",
          scrollBehavior: "smooth", 
        }}
      >
        <BsFillArrowLeftSquareFill
          onClick={() => {
            slide.current.scrollLeft -= 1000;
          }}
          fill="red"
          size={30}
          style={{ position: "fixed", top: "50%", cursor: "pointer" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/12/04/22/15/fitness-1882721_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2013/03/09/14/38/gym-91849_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/07/02/10/26/training-828760_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/04/24/17/56/fitness-studio-331569_960_720.jpg"
          alt=""
          style={{ objectFit: "cover" }}
        />
        <BsFillArrowRightSquareFill
          onClick={() => {
            slide.current.scrollLeft += 1000;
          }}
          fill="red"
          size={30}
          style={{
            position: "fixed",
            top: "50%",
            right: "0rem",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
