import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StoreMenu from "./StoreMenu";
import { useNavigate } from "react-router-dom";

export default function SoreCard({ closeShop, title }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const date = new Date().toDateString();
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      onClick={() => {
        if (!closeShop) {
          navigate(`/ourstore/${title}`);
        } else {
          alert("Sorry! This shop is closed");
        }
      }}
      sx={{
        minWidth: 400,
        maxWidth: 400,
        minHeight: 400,
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: closeShop ? `rgba(0,0,0,0.5)` : "",
        cursor: closeShop ? "not-allowed" : "pointer",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="profile">
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={handleClick}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={date}
      />
      <StoreMenu handleClose={handleClose} anchorEl={anchorEl} open={open} />
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        alt="Paella dish"
        sx={{
          alignSelf: "center",
          objectPosition: "center",
          objectFit: "cover",
          height: "10rem",
          width: "fit-content",
        }}
      />
      <CardContent
        component="h1"
        sx={{
          position: "absolute",
          display: closeShop ? "" : "none",
          color: "white",
          fontFamily: "cursive",
          translate: "10rem 10rem",
        }}
      >
        Close
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
