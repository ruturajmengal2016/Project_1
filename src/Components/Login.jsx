import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Style from "./Styles/Register.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dataRoot } from "../App";
const Login = () => {
  const { data, setData, details, setDetails } = useContext(dataRoot);
  const navigate = useNavigate();
  function handleUser() {
    setData([...data, details]);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      alert("You don't have an account");
      return -1;
    }
    user.find((ele, index) => {
      if (ele.email === details.email) {
        setDetails({ ...details, text: "subscribed" });
        navigate("/home");
      } else {
        alert("You don't have an account");
        return -1;
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
            fontSize: "2rem",
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
        <Button variant="outlined" endIcon={<SendIcon />} onClick={handleUser}>
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
