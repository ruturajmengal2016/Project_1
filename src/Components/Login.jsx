import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Style from "./Styles/Register.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Register = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [data, setData] = useState();
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);
  return (
    <div className={Style.root}>
      <form>
        <TextField
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <TextField
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Register;
