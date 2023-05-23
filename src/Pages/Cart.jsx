import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartBox from "../Components/Atoms/CartBox";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export default function Cart() {
  const cartData = useSelector((state) => state.stores.cartData);
  const [open, setOpen] = React.useState(false);
  const handleClick = (data) => {
    setOpen(data);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {open} has removed from your cart list
        </Alert>
      </Snackbar>
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
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            boxSizing: "border-box",
            border: "1px solid black",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Product Name
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            Quantity
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Price
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Actions
          </Typography>
        </Box>
        {cartData.length ? (
          <Box sx={{ overflowY: "auto" }}>
            {cartData.map((ele, ind) => {
              return (
                <>
                  <CartBox
                    product={ele}
                    key={ind}
                    index={ind}
                    handleClick={handleClick}
                  />
                  <Divider />
                </>
              );
            })}
          </Box>
        ) : (
          <ImageList
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageListItem>
              <img
                src="https://media.istockphoto.com/id/1336729805/vector/box-packaging-icon-vector-template-flat-design.jpg?s=170667a&w=0&k=20&c=s9-ac-6CdFLTVFDIKVvg1gbQn-SfGU-KNVGelymcAqo="
                alt="cart"
              />
            </ImageListItem>
          </ImageList>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="/"
          style={{
            color: "blue",
            textDecoration: "none",
            fontSize: "1.1rem",
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.2rem",
          }}
        >
          <KeyboardBackspaceIcon /> Continue shopping
        </Link>
        {cartData.length ? (
          <Link
            to="/bill"
            style={{
              color: "green",
              textDecoration: "none",
              fontSize: "1.1rem",
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            Generate bill <EastIcon />
          </Link>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
