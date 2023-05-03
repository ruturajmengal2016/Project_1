import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
export default function Training() {
  const refe = React.useRef();
  const array = [
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  ];
  return (
    <>
      <Typography variant="h4" marginTop={10}>
        Training Programs
      </Typography>
      <Box
        ref={refe}
        sx={{
          height: "100vh",
          maxHeight: "fit-content",
          overflow: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          scrollBehavior: "smooth",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        {array.map((ele, ind) => {
          return (
            <img src={ele} alt="profile" key={ind} style={{ height: "40%" }} />
          );
        })}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "98%",
          left: "50%",
          display: { xs: "none", sm: "flex" },
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <BsFillArrowLeftCircleFill
          size={25}
          onClick={() => {
            refe.current.scrollLeft = 0;
          }}
        />
        See More
        <BsFillArrowRightCircleFill
          size={25}
          onClick={() => {
            refe.current.scrollLeft += 500;
          }}
        />
      </Box>
    </>
  );
}
