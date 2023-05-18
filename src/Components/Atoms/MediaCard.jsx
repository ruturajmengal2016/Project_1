import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AlertDialog from "./DialogBox";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ image, title, text }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 300, height: "fit-content" }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: 100, overflow: "hidden" }}
        >
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate(`/store/${title}`, { state: { storeName: title } });
          }}
        >
          Buy
        </Button>
        <Button size="small" onClick={handleClickOpen}>
          Learn More
        </Button>
      </CardActions>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        title={title}
        text={text}
      />
    </Card>
  );
}
