import React from "react";
import fetchData from "../axios/axios";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Style from "./Styles/Store.module.scss";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SoreCard from "../Components/Atoms/StoreCard";
import { updateStore } from "../Redux/slice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  alignSelf: {
    xs: "flex-end",
    sm: "flex-start",
  },
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ff5252",
  "&:hover": {
    backgroundColor: "#ff5252",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "30%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Store = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const allData = useSelector((state) => state.stores.store);
  // React.useEffect(() => {
  //   fetchData
  //     .get(`/api/${location.state.storeName}`)
  //     .then((res) => dispatch(updateStore({ store: res })))
  //     .catch((error) => console.error(error));
  // }, [location, dispatch]);

  return (
    <Box component="div" className={Style.root}>
      <Typography component="div" className={Style.header}>
        <Typography variant="h4">{location.state.storeName}</Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Typography>
      <Box
        component="div"
        className={Style.store}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gridTemplateRows: "auto",
          gap: "1rem",
          padding: "1rem 0rem 1rem 0.5rem",
        }}
      >
        {allData.map((data, ind) => {
          return <SoreCard key={ind} closeShop={false} title="Sai Kirana" />;
        })}
      </Box>
    </Box>
  );
};

export default Store;
