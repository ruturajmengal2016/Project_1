import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";

export default function Profile() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `linear-gradient(to left top, #6b70d1, #8773d4, #a077d7, #b77bd8, #cd7fd8, #dc7cd0, #ea7ac7, #f678bd, #fd6fa7, #ff6790, #ff6378, #fb625f)`,
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        overflow: "auto",
        padding: "0.2rem",
        boxSizing: "border-box",
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "20%",
          },
          height: "40%",
          backgroundColor: "primary.dark",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <SettingsIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: "50%", height: "50%" }}
          variant="square"
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
          },
          height: {
            xs: "50%",
            sm: "100%",
          },
          backgroundColor: "primary.dark",
        }}
      ></Box>
    </Box>
  );
}

export const Setting = () => {
  return (
    <div>
      <h1>Setting</h1>
    </div>
  );
};
