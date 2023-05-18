import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Products from "../utils/Products.jpg";
const Login = () => {
  const lables = ["Name", "Email", "Password", "Date"];
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxHeight: "fit-content",
        backgroundImage: `url(${Products})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    >
      <Box
        component="form"
        onSubmit={() => {}}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxSizing: "border-box",
          p: "5rem",
          borderRadius: "4rem 0rem 4rem 0rem",
          border: "2px solid #F3E99F",
          zIndex: 1,
          backgroundColor: "#F3E99F",
          opacity: 0.9,
          color: "black",
          outline: "none",
        }}
      >
        {lables.map((ele, ind) => {
          return (
            <TextField
              inputProps={{
                style: {
                  color: "darkred",
                },
              }}
              focused
              key={ind}
              hiddenLabel
              placeholder={ele.toLowerCase()}
              type={ele.toLowerCase()}
              variant="outlined"
            />
          );
        })}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
