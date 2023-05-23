import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCartData } from "../../Redux/slice";
const CartBox = ({ product, index }) => {
  const dispatch = useDispatch();
  return (
    <Box
      component="div"
      sx={{
        height: "fit-content",
        padding: "1rem",
        boxSizing: "border-box",
        display: "flex",
        backgroundColor: "orange",
        width: "85%",
        marginTop: "1rem",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5">{product.name}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(deleteCartData({ data: index }));
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

export default CartBox;
