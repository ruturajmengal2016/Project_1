import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Style from "./Styles/Register.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import joi from "joi";

const Login = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [data, setData] = useState([]);
  const schema = joi.object({
    email: joi.string(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]")),
  });
  const navigate = useNavigate();
  useEffect(() => {
    schema
      .validateAsync(data[0])
      .then((res) => {
        const exist = localStorage.getItem(JSON.stringify(data[0].email));
        if (exist) {
          navigate("/home");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [data]);
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
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <Button
          sx={{ alignSelf: "flex-start" }}
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={() => {}}
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
