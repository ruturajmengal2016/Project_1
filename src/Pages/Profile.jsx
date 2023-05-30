import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function Profile() {
  const [photo, setPhoto] = React.useState(
    JSON.parse(localStorage.getItem("photo")) || null
  );
  const [setting, setSetting] = React.useState(true);
  const fields = [
    { title: "Name", icon: "" },
    { title: "Email", icon: <EmailIcon /> },
    { title: "Phone number", icon: <PhoneEnabledIcon /> },
  ];
  return (
    <Box
      sx={{
        minHeight: "fit-content",
        height: "100vh",
        backgroundImage: `linear-gradient(to left top, #6b70d1, #8773d4, #a077d7, #b77bd8, #cd7fd8, #dc7cd0, #ea7ac7, #f678bd, #fd6fa7, #ff6790, #ff6378, #fb625f)`,
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        overflow: "auto",
        padding: "0.2rem",
        boxSizing: "border-box",
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "20%",
          },
          height: "40%",
          backgroundColor: "lightgrey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => {
            setSetting(false);
          }}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Tooltip title="update contact">
            <SettingsIcon
              sx={{
                color: "black",
              }}
            />
          </Tooltip>
        </IconButton>
        <Avatar
          component="label"
          alt="Remy Sharp"
          src={photo}
          sx={{ width: "60%", height: "60%" }}
          variant="rounded"
        >
          <input
            type="file"
            style={{
              border: "1px solid red",
              display: "none",
            }}
            onChange={(e) => {
              let reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.addEventListener(
                "load",
                (e) => {
                  setPhoto(e.target.result);
                  localStorage.setItem(
                    "photo",
                    JSON.stringify(e.target.result)
                  );
                },
                false
              );
            }}
          />
          <AccountCircleIcon
            sx={{
              height: "80%",
              width: "80%",
            }}
          />
        </Avatar>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
          },
          minHeight: {
            xs: "50%",
            sm: "100%",
          },
          backgroundColor: "whitesmoke",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          padding: {
            xs: "1rem",
            sm: "2rem",
          },
          gap: "1.5rem",
        }}
      >
        <Typography
          component="div"
          variant="h5"
          fontWeight="bold"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          Contact Details
          {setting ? (
            ""
          ) : (
            <Button
              onClick={() => {
                setSetting(true);
              }}
              variant="contained"
              sx={{
                textTransform: "none",
                padding: "0.3rem",
              }}
            >
              Save changes
            </Button>
          )}
        </Typography>
        {fields.map((ele, ind) => {
          return (
            <TextField
              label={ele.title}
              key={ind}
              variant="standard"
              defaultValue="Hello"
              InputProps={{
                readOnly: setting,
                endAdornment: (
                  <InputAdornment position="end">{ele.icon}</InputAdornment>
                ),
              }}
            />
          );
        })}
        <TextField
          InputProps={{
            readOnly: setting,
          }}
          label="Default address"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            height: "10%",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0rem 1rem",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Your order
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Tracking shipment
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Your favourite
          </Button>
          <Button variant="outlined" sx={{ textTransform: "none" }}>
            Your refund
          </Button>
        </Box>
        <SwipeableEdgeDrawer />
      </Box>
    </Box>
  );
}

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root
      sx={{
        display: {
          xs: "inline-block",
          sm: "none",
        },
      }}
    >
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        sx={{
          display: {
            sm: "none",
          },
        }}
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography
            component="div"
            sx={{ p: 2, color: "text.secondary", fontWeight: "bold" }}
          >
            Your Activity
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
