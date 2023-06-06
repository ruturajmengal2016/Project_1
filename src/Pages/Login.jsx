import {
  Box,
  Button,
  TextField,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [change, setChange] = React.useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxHeight: "fit-content",
        backgroundImage: `url(https://productoftheyearusa.com/wp-content/uploads/2020/01/winners.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {change ? (
        <SignIn navigate={navigate} handleChange={handleChange} />
      ) : (
        <SignUp navigate={navigate} handleChange={handleChange} />
      )}
    </Box>
  );
};

const SignIn = ({ navigate, handleChange }) => {
  const lables = ["Email", "Password"];
  const [details, setDetails] = React.useState({
    Email: "",
    Password: "",
  });
  return (
    <Box
      component="form"
      onSubmit={async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(auth, details.Email, details.Password)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
      }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxSizing: "border-box",
        p: "5rem",
        borderRadius: "4rem 0rem 4rem 0rem",
        border: "2px solid blue",
        backgroundColor: "#fafafa",
        opacity: `0.9 !important`,
        color: "black",
        outline: "none",
      }}
    >
      <Button
        onClick={async () => {
          await signInWithPopup(auth, googleProvider)
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              alert(error.message);
            });
        }}
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{
          textTransform: "none",
        }}
      >
        Sign in with google
      </Button>
      <Divider
        sx={{
          color: "red",
        }}
      >
        OR
      </Divider>
      {lables.map((ele, ind) => {
        return (
          <TextField
            inputProps={{
              style: {
                color: "darkred",
              },
            }}
            required
            focused
            autoComplete="off"
            name={ele}
            key={ind}
            hiddenLabel
            placeholder={ele.toLowerCase()}
            type={ele.toLowerCase()}
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
        );
      })}
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Typography variant="body1">
        Don't have an account?
        <Link sx={{ cursor: "pointer" }} onClick={handleChange}>
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

const SignUp = ({ navigate, handleChange }) => {
  const lables = ["Name", "Email", "Password", "Date"];
  const [details, setDetails] = React.useState({
    Name: "",
    Email: "",
    Password: "",
    Date: "",
  });
  return (
    <Box
      component="form"
      onSubmit={async (event) => {
        event.preventDefault();
        await createUserWithEmailAndPassword(
          auth,
          details.Email,
          details.Password
        )
          .then(() => {
            localStorage.setItem("_user", JSON.stringify(details));
          })
          .catch((error) => {
            console.log(error.message);
          });
      }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxSizing: "border-box",
        p: "5rem",
        borderRadius: "4rem 0rem 4rem 0rem",
        border: "2px solid blue",
        backgroundColor: "#fafafa",
        opacity: `0.9 !important`,
        color: "black",
        outline: "none",
      }}
    >
      <Button
        onClick={async () => {
          await signInWithPopup(auth, googleProvider)
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              alert(error.message);
            });
        }}
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{
          textTransform: "none",
        }}
      >
        Sign up with google
      </Button>
      <Divider
        sx={{
          color: "red",
        }}
      >
        OR
      </Divider>
      {lables.map((ele, ind) => {
        return (
          <TextField
            inputProps={{
              style: {
                color: "darkred",
              },
            }}
            required
            focused
            autoComplete="off"
            name={ele}
            key={ind}
            hiddenLabel
            placeholder={ele.toLowerCase()}
            type={ele.toLowerCase()}
            variant="outlined"
            onChange={(e) => {
              setDetails({ ...details, [e.target.name]: e.target.value });
            }}
          />
        );
      })}
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <Typography variant="body1">
        Already have an account?
        <Link sx={{ cursor: "pointer" }} onClick={handleChange}>
          Sign In
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
