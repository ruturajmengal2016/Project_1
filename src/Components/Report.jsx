import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Typography } from "@mui/material";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function Report() {
  const [hi, setHi] = React.useState(false);
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "lightcyan",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {hi ? (
        <Box
          sx={{
            border: "2px solid green",
            height: "80%",
            width: "80%",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="div"
            width="80%"
            sx={{
              overflowY: "auto",
            }}
          ></Box>
          <Box
            component="div"
            width="20%"
            sx={{
              display: "flex",
              justifyContent: "center",
              boxSizing: "border-box",
              padding: "1rem",
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              icon={<SpeedDialIcon />}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
      ) : (
        <Typography
          onClick={() => {
            setHi(true);
          }}
          component="img"
          src="https://www.vert-age.com/img/Vert-Age_Chatbot.gif"
          sx={{
            cursor: "pointer",
            position: "relative",
            top: 0,
            objectFit: "contain",
            height: {
              sm: "100%",
            },
            width: {
              xs: "80%",
              sm: "100%",
            },
          }}
        />
      )}
    </Box>
  );
}
