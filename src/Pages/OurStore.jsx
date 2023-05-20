import React from "react";
import Style from "./Styles/OurStore.module.scss";
import Box from "@mui/material/Box";
import { Avatar, Typography, Chip } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { useParams } from "react-router-dom";
const OurStore = () => {
  const { title } = useParams();
  const chips = [
    {
      label: "Direction",
      icon: <DirectionsIcon />,
      fun: () => {
        alert("direction");
      },
    },
    {
      label: "Save",
      icon: <TurnedInNotIcon />,
      fun: () => {
        alert("save");
      },
    },
    {
      label: "Call",
      icon: <PhoneIcon />,
      fun: () => {
        alert("call");
      },
    },
  ];
  return (
    <Box className={Style.root} component="div">
      <Box component="div" className={Style.profile}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          {title[0]}
        </Avatar>
        <Typography variant="h4">{title}</Typography>
        <Typography component="div" sx={{ display: "flex", gap: "0.5rem" }}>
          {chips.map((ele, ind) => {
            return (
              <Chip
                key={ind}
                icon={ele.icon}
                label={ele.label}
                color="primary"
                variant="outlined"
                sx={{
                  cursor: "pointer",
                }}
                component="span"
                onClick={ele.fun}
              />
            );
          })}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ height: 200, backgroundColor: "primary.main" }}
      ></Box>
      <Box
        component="div"
        sx={{ height: 200, backgroundColor: "primary.main" }}
      ></Box>
      <Box
        component="div"
        sx={{ height: 200, backgroundColor: "primary.main" }}
      ></Box>
      <Box
        component="div"
        sx={{ height: 200, backgroundColor: "primary.main" }}
      ></Box>
    </Box>
  );
};

export default OurStore;
