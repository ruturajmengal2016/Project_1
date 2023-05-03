import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";


export default function Register() {
  const [details, setDetails] = React.useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const fields = ["Name", "Email", "Password"];
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
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(details);
          axios.post("https://gym-server-v0ka.onrender.com/api/create",details)
          .then((res) => console.log(res)).catch((error)=>{
            console.log(error);
          })
        }}

      >
        {fields.map((ele, ind) => {
          return (
            <TextField
              label={ele}
              name={ele}
              variant="outlined"
              key={ind}
              placeholder={ele}
              type={ele.toLowerCase()}
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />
          );
        })}
        <Button variant="contained" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
}
