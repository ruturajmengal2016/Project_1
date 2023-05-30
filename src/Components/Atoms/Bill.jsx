import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { billQuantity, updateBill } from "../../Redux/slice";

export default function Bill() {
  const billData = useSelector((state) => state.stores.bill);
  return (
    <Box
      sx={{
        minHeight: "fit-content",
        height: "100vh",
        background: `linear-gradient(193deg, rgba(218,66,64,1) 0%, rgba(171,95,164,1) 50%, rgba(34,51,195,1) 99%)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minHeight: "fit-content",
          width: { xs: "80%", sm: "30%" },
          height: "90%",
          backgroundColor: "whitesmoke",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            position: "sticky",
            zIndex: 4,
            top: 1,
            minHeight: "25%",
            width: "100%",
            backgroundColor: "lightgray",
          }}
        ></Box>
        {billData.map((ele, ind) => {
          return <Itembox key={ind} items={ele} />;
        })}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            bottom: 1,
            minHeight: "10%",
            width: "100%",
            backgroundColor: "lightpink",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0rem 1rem",
          }}
        >
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Place order
          </Button>
          <Typography variant="h5" fontFamily="sans-serif">
            ₹{200}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const Itembox = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: "90%",
        minHeight: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0rem 0.3rem",
      }}
    >
      <Typography component="div">{items.name}</Typography>
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.2rem",
        }}
      >
        <IconButton
          onClick={() => {
            dispatch(billQuantity({ data: items.name, type: "inc" }));
          }}
        >
          <AddIcon sx={{ color: "green" }} />
        </IconButton>
        <span>{items.quantity}</span>
        <IconButton
          onClick={() => {
            dispatch(billQuantity({ data: items.name, type: "dec" }));
          }}
        >
          <RemoveIcon sx={{ color: "red" }} />
        </IconButton>
      </Typography>
      <Typography component="div">{items.quantity * items.price}</Typography>
    </Box>
  );
};
