import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../Redux/slice";

export default function Cart() {
  const cartData = useSelector((state) => state.stores.cartData);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(updateCart({ data: cartData.length }));
  }, [dispatch, cartData]);
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "cursive",
          color: "lightsalmon",
          display: "flex",
          justifyContent: "space-between",
          height: "10%",
        }}
      >
        <span>Shopping Cart</span>
        <span style={{ fontFamily: "monospace" }}>Items:{cartData.length}</span>
      </Typography>
      <Divider />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90%",
          backgroundColor: "lightslategrey",
          marginTop: "1rem",
          overflowY: "auto",
        }}
      ></Box>
    </Box>
  );
}
