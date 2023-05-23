import React from "react";
import { useSprings, useSpring, animated } from "@react-spring/web";
import Style from "./Styles/Home.module.scss";
import { Box } from "@mui/system";
import MediaCard from "../Components/Atoms/MediaCard";
import grocery from "../utils/grocery.jpg";
import electronics from "../utils/electronics.jpg";
import cloths from "../utils/cloths.jpg";
import homeAccessories from "../utils/homeAccessories.jpg";
import data from "../utils/accessories.json";
function Home() {
  const [springs] = useSprings(1, () => ({
    from: { x: "0%", borderRadius: "0%", height: 80, width: 80 },
    to: async (next, cancel) => {
      await next({ x: "10%", borderRadius: "50%" });
      await next({ x: "40%", borderRadius: "100%" });
      await next({ height: 500, width: 500 });
      cancel({ height: 100, width: 100 });
    },
  }));
  const heading = useSpring({
    from: { display: "none" },
    to: { display: "inline-flex" },
    delay: 5000,
  });
  const text = [grocery, electronics, cloths, homeAccessories];
  return (
    <Box component="div" className={Style.root}>
      <Box
        className={Style.heading}
        sx={{ display: { xs: "none", sm: "flex" }, width: "50%" }}
      >
        {springs.map((props, ind) => {
          return (
            <animated.div
              key={ind}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 80,
                height: 80,
                background: "#ff6d6d",
                transitionDuration: "3s",
                ...props,
              }}
            >
              <animated.h1
                style={{
                  fontFamily: "cursive",
                  fontSize: "4rem",
                  textAlign: "center",
                  color: "whitesmoke",
                  ...heading,
                }}
              >
                Welcome to Compras...
              </animated.h1>
            </animated.div>
          );
        })}
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
          background: `linear-gradient(234deg, rgba(34,43,195,0.7540266106442577) 19%, rgba(224,18,53,0.8184523809523809) 100%)`,
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
