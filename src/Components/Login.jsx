import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Style from "./Styles/Register.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function handleUser() {
    setData([...data,details])
    const user = JSON.parse(localStorage.getItem("user"));
    user.find((ele) => {
      if (ele.email === details.email) {
        navigate("/home");
      }else{
        alert("You don't have an account")
        return -1
      }
    });
  }
  return (
    <div className={Style.root}>
      <img
        src="https://images.pexels.com/photos/13811057/pexels-photo-13811057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        style={{
          zIndex: 1,
          objectFit: "cover",
          height: "90%",
          opacity: "0.5",
          translate: "-5rem",
        }}
      />
      <form>
        <Typography
          variant="h6"
          sx={{
            color: "red",
            textAlign: "center",
            alignSelf: "flex-start",
            fontWeight: "bold",
          }}
        >
          LOG IN
        </Typography>
        <TextField
          type="email"
          name="email"
          label="Email"
          color="secondary"
          focused
          sx={{ input: { color: "white" } }}
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          color="secondary"
          focused
          sx={{ input: { color: "white" } }}
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <Button
          sx={{ alignSelf: "flex-start" }}
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={handleUser}
        >
          Send
        </Button>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            textAlign: "center",
            alignSelf: "flex-start",
            fontWeight: "bold",
          }}
        >
          DON'T HAVE AN ACCOUNT?
        </Typography>
        <big
          style={{
            color: "green",
            textDecorationColor: "red",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </big>
      </form>
    </div>
  );
};

export default Login;
