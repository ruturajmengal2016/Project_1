import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sub } from "../App";

export default function Login() {
  const nav = useNavigate();
  const value = React.useContext(Sub);
  const [details, setDetails] = React.useState({
    email: "",
    password: "",
  });
  const fields = ["Email", "Password"];

  return (
    <Box
      sx={{
        height: "100vh",
        maxHeight: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">SIGN IN</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "2px solid green",
          boxSizing: "border-box",
          padding: "5rem",
          gap: "2rem",
          borderRadius: "10% 0%",
        }}
        onSubmit={async (e) => {
          await value.setter[1]("SUBSCRIBED");
          e.preventDefault();
          await axios
            .post("https://gym-server-yi13.onrender.com/api/login", details)
            .then((res) => alert(res.data))
            .then(() => {
              nav("/home");
            })
            .catch((err) => alert(err.response.data));
        }}
      >
        {fields.map((ele, ind) => {
          return (
            <TextField
              label={ele}
              name={ele.toLowerCase()}
              variant="outlined"
              key={ind}
              placeholder={ele.toUpperCase()}
              type={ele.toLowerCase()}
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />
          );
        })}
        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "red",
            border: "none",
            outline: "none",
            borderRadius: "10px",
            padding: "0.5rem 1.5rem",
            "&:hover": {
              backgroundColor: "red",
              color: "grey",
              boxShadow: "0 0 10px grey",
              outline: "none",
              border: "none",
            },
          }}
          type="submit"
        >
          Login
        </Button>
        <Typography>
          Not Have an Account?
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            &nbsp; Register
          </Link>
        </Typography>
      </form>
    </Box>
  );
}
