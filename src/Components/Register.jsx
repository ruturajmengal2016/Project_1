import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Style from "./Styles/Register.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import joi from "joi";
import { useNavigate } from "react-router-dom";
import { dataRoot } from "../App";

const Register = () => {
  const { data, setData, details, setDetails } = useContext(dataRoot);
  const navigate = useNavigate();
  const schema = joi.object({
    name: joi.string().max(20).required().trim(),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: joi.string().pattern(new RegExp("[a-zA-Z0-9]")),
    subscribed: joi.bool(),
    text: joi.string(),
  });
  const handleChange = () => {
    const values = [...data, details];
    setData(values);
    schema
      .validateAsync(details)
      .then(() => {
        const user = localStorage.getItem("user");
        if (user === null) {
          localStorage.setItem("user", JSON.stringify(values));
          alert("You register successfully...");
          setDetails({ ...details, text: "subscribed" });
          setDetails({ name: " ", email: " ", password: " " });
          navigate("/login");
        } else {
          JSON.parse(user).find((ele, ind) => {
            if (ele.email === details.email) {
              throw new Error("user already exist");
            }
            return 1;
          });
        }
      })
      .then(() => {
        localStorage.setItem("user", JSON.stringify(values));
        setDetails({ name: " ", email: " ", password: " " });
        navigate("/login");
      })
      .then(() => {
        alert("You register successfully...");
      })
      .catch((err) => alert(err));
  };
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
          SIGN UP
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="filled"
          color="success"
          focused
          sx={{ input: { color: "white" } }}
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="filled"
          color="success"
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
          variant="filled"
          color="success"
          focused
          sx={{ input: { color: "white" } }}
          onChange={(e) => {
            setDetails({ ...details, [e.target.name]: e.target.value });
          }}
        />
        <Button
          type="submit"
          sx={{ alignSelf: "flex-start" }}
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={(e) => {
            e.preventDefault();
            handleChange();
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default Register;
