import React from "react";
// import { useSprings, useSpring, animated } from "@react-spring/web";
import Style from "./Styles/Home.module.scss";
import { Box } from "@mui/system";
import MediaCard from "../Components/Atoms/MediaCard";
import grocery from "../utils/grocery.jpg";
import electronics from "../utils/electronics.jpg";
import cloths from "../utils/cloths.jpg";
import homeAccessories from "../utils/homeAccessories.jpg";
import data from "../utils/accessories.json";
import { Button, Typography } from "@mui/material";
// import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import cafe from "../utils/cafe.gif";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
function Home() {
  const text = [grocery, electronics, cloths, homeAccessories];
  return (
    <Box
      component="div"
      className={Style.root}
      sx={{
        background: `linear-gradient(234deg, rgba(34,43,195,0.7540266106442577) 19%, rgba(224,18,53,0.8184523809523809) 100%)`,
      }}
    >
      <Box
        className={Style.heading}
        sx={{
          display: { xs: "none", sm: "flex" },
          width: "50%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            alignSelf: "center",
            backgroundColor: "#FFEEDF",
            width: "80%",
            height: "80%",
            borderRadius: "1rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "2px solid blue",
          }}
        >
          <Box
            component="img"
            src={cafe}
            height="50%"
            width="70%"
            sx={{ alignSelf: "center" }}
          />
          <Typography
            variant="h3"
            fontFamily="Kanit, sans-serif"
            fontWeight={600}
            sx={{
              wordSpacing: "1px",
              fontStyle: "oblique",
              width: "90%",
            }}
          >
            👋Hey, Do you want to create your own store?
          </Typography>
          <Typography
            variant="caption"
            fontFamily="Kanit, sans-serif"
            fontWeight={500}
            fontSize={20}
          >
            here, you can create the store.
          </Typography>
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-start" }}
            startIcon={<AddBusinessIcon />}
            href="https://camal-b7b55.web.app/"
            target="_blank"
          >
            Create store
          </Button>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          padding: "1rem",
          justifyContent: "center",
          height: "100%",
          overflowY: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          width: { xs: "100%", sm: "50%" },
        }}
      >
        {data.map((ele, ind) => {
          return (
            <MediaCard
              key={ind}
              image={text[ind]}
              text={ele.text}
              title={ele.title}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default Home;
