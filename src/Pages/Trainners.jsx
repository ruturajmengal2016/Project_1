import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Trainners() {
  const [open, setOpen] = React.useState(true);
  const images = [
    "https://media.istockphoto.com/id/1406538311/photo/stone-platform-pedestal-in-tropical-forest-for-product-presentation-and-green-forest.jpg?b=1&s=170667a&w=0&k=20&c=lOa0XgmUPqiVYQ3-XIUt5_EiwQYZmOwbtiEhbVCqm6g=",
    "https://media.istockphoto.com/id/1406538311/photo/stone-platform-pedestal-in-tropical-forest-for-product-presentation-and-green-forest.jpg?b=1&s=170667a&w=0&k=20&c=lOa0XgmUPqiVYQ3-XIUt5_EiwQYZmOwbtiEhbVCqm6g=",
    "https://media.istockphoto.com/id/1406538311/photo/stone-platform-pedestal-in-tropical-forest-for-product-presentation-and-green-forest.jpg?b=1&s=170667a&w=0&k=20&c=lOa0XgmUPqiVYQ3-XIUt5_EiwQYZmOwbtiEhbVCqm6g=",
    "https://media.istockphoto.com/id/1406538311/photo/stone-platform-pedestal-in-tropical-forest-for-product-presentation-and-green-forest.jpg?b=1&s=170667a&w=0&k=20&c=lOa0XgmUPqiVYQ3-XIUt5_EiwQYZmOwbtiEhbVCqm6g=",
  ];
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Typography variant="h4" textAlign="center" margin="5rem 0rem">
        Meet Our Team
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        padding="0rem 3rem"
        marginBottom="1rem"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        accusantium laborum error quidem in, cupiditate enim dicta veritatis
        pariatur libero, vero commodi officia blanditiis tempore incidunt ipsam
        asperiores sit mollitia!
      </Typography>
      <List
        sx={{
          width: "100%",
          height: "100vh",
          maxHeight: "fit-content",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          gap: "1.3rem",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {images.map((element, ind) => {
            return <img src={element} key={ind} height={200} />;
          })}
        </Box>

        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Show More
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{ display: "flex", gap: "1rem" }}
          >
            {images.map((element, ind) => {
              return <img src={element} key={ind} height={200} />;
            })}
          </List>
        </Collapse>
      </List>
    </>
  );
}
