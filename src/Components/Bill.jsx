import * as React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { billQuantity } from "../Redux/slice";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
export default function Bill() {
  const billData = useSelector((state) => state.stores.bill);
  const navigate = useNavigate();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user logged in
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);
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
        >
          <Header />
        </Box>
        <Box
          sx={{
            height: "65%",
            minHeight: "fit-content",
            width: "100%",
            overflowY: "auto",
          }}
        >
          {billData.map((ele, ind) => {
            return <Itembox key={ind} items={ele} />;
          })}
        </Box>
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
            ₹
            {billData
              .map((ele) => ele.price)
              .reduce((curr, nextVal) => curr + nextVal, 0)}
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
        width: "100%",
        minHeight: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0rem 0.3rem",
        "&:hover": {
          backgroundColor: "lightgray",
        },
      }}
    >
      <Typography component="div" width="30%">
        {items.name}
      </Typography>
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.2rem",
          width: "30%",
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
      <Typography component="div" width="20%">
        {Math.floor(items.quantity * items.price)}
      </Typography>
    </Box>
  );
};

const Header = () => {
  return (
    <Box sx={{ fontFamily: "cursive", p: "0.5rem" }}>
      <Typography variant="h5">INVOICE</Typography>
      <Divider
        component="div"
        sx={{
          fontWeight: "bold",
          height: "0.5rem",
          borderBottomWidth: "0.2rem",
          borderColor: "lightcoral",
        }}
      />
      <Box>
        <Typography
          variant="caption"
          fontSize={20}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <PhoneIcon />
          +87 4378572835
        </Typography>
        <Typography
          variant="caption"
          fontSize={20}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <ContactMailIcon />
          salesyours@gmail.com
        </Typography>
      </Box>
      <Typography
        variant="caption"
        fontSize={20}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.5rem",
        }}
      >
        Bill id:fdma32523626
      </Typography>
    </Box>
  );
};
