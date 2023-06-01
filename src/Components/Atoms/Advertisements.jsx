import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Notification() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "lightcoral",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem 0rem",
        boxSizing: "border-box",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "lightblue",
          minHeight: "100vh",
          width: "90%",
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          boxSizing: "border-box",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "0.5rem",
            backgroundColor: "",
            width: {
              xs: "100%",
              sm: "50%",
            },
            height: "100%",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              height: "20%",
              backgroundColor: `#f3ec78`,
              backgroundImage: `linear-gradient(193deg, rgba(221,45,199,1) 42%, rgba(195,34,45,1) 99%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "monospace",
              textAlign: "center",
            }}
          >
            ADVERTISING
          </Typography>
          <Typography
            height="80%"
            variant="h1"
            textAlign="center"
            sx={{
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "15rem",
              fontFamily: "initial",
              color: "red",
              background: "black",
              borderRadius: "0% 20%",
              border: "5px dotted green",
            }}
          >
            50%
          </Typography>
          <Typography textAlign="justify" p={1} fontSize={20} height="20%">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quae
            modi, placeat sed minima libero ad nulla, temporibus recusandae sit
            assumenda cum saepe excepturi sunt alias voluptas reprehenderit
            aliquid laudantium.
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
            },
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="https://storage.googleapis.com/easygrocery/2018/02/11.png"
            sx={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
