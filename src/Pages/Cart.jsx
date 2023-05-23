import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../Redux/slice";
import CartBox from "../Components/Atoms/CartBox";
import { updateCartData } from "../Redux/slice";

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
        variant="div"
        sx={{
          fontFamily: "cursive",
          color: "lightsalmon",
          display: "flex",
          justifyContent: "space-between",
          height: "10%",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Shopping Cart</Typography>
        <Typography variant="h5">Items:{cartData.length}</Typography>
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
      >
        {cartData.map((ele, ind) => {
          return (
            <Typography
              variant="body1"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              <CartBox product={ele} key={ind} index={ind} />
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}
