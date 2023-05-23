import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCartData } from "../../Redux/slice";
const CartBox = ({ product, index }) => {
  const dispatch = useDispatch();
  return (
    <Box component="div" sx={{ padding: "1rem" }}>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          component="div"
          sx={{ flex: { xs: 2.5, sm: 1.2 } }}
        >
          {product.name}
        </Typography>
        <Typography
          component="div"
          variant="body1"
          sx={{
            flex: 1,
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          {product.calories}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ flex: { xs: 1, sm: 0.9 } }}
        >
          {product.calories}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            dispatch(deleteCartData({ data: index }));
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default CartBox;
