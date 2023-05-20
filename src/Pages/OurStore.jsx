import React from "react";
import Style from "./Styles/OurStore.module.scss";
import Box from "@mui/material/Box";
import { Avatar, Typography, Chip } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { useParams } from "react-router-dom";
import ProductTable from "../Components/Atoms/ProductsTable";
import fetchData from "../axios/axios";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];
const OurStore = () => {
  const { title } = useParams();

  const chips = [
    {
      label: "Direction",
      icon: <DirectionsIcon />,
      fun: () => {
        alert("direction");
      },
    },
    {
      label: "Save",
      icon: <TurnedInNotIcon />,
      fun: () => {
        alert("save");
      },
    },
    {
      label: "Call",
      icon: <PhoneIcon />,
      fun: () => {
        alert("call");
      },
    },
  ];

  // React.useEffect(() => {
  //   fetchData
  //     .get("")
  //     .then((res) => setRows(res))
  //     .catch((error) => console.log(error));
  // }, [title]);
  return (
    <Box className={Style.root} component="div">
      <Box component="div" className={Style.profile}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
          }}
        >
          {title[0]}
        </Avatar>
        <Typography variant="h4">{title}</Typography>
        <Typography component="div" sx={{ display: "flex", gap: "0.5rem" }}>
          {chips.map((ele, ind) => {
            return (
              <Chip
                key={ind}
                icon={ele.icon}
                label={ele.label}
                color="primary"
                variant="outlined"
                sx={{
                  cursor: "pointer",
                }}
                component="span"
                onClick={ele.fun}
              />
            );
          })}
        </Typography>
      </Box>
      <Box component="div" sx={{ height: "fit-content" }}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238154.609070339!2d79.0881546!3d21.14580040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684583229298!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <ProductTable rows={rows} />
    </Box>
  );
};

export default OurStore;
