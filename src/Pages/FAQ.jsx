import * as React from "react";
import Box from "@mui/material/Box";
import FaqTree from "../Components/Atoms/FaqTree";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
export default function FAQ() {
  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          minHeight: "100vh",
          boxSizing: "border-box",
          padding: { xs: "0.5rem", sm: "2rem" },
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", sm: "40%" },
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: { xs: "0.5rem", sm: "1rem" },
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              height: "30%",
              width: "100%",
              display: "flex",
              boxSizing: "border-box",
              padding: { xs: "0.2rem 0.2rem", sm: "1rem" },
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Compras FAQ
            </Typography>
            <Typography variant="h6" textAlign="justify">
              If you're new to Compras or looking to replatform your business,
              this guide will help you learn more the platform and its features.
            </Typography>
          </Box>
          <Box
            sx={{
              height: "fit-content",
              width: "100%",
              boxSizing: "border-box",
              padding: "0.2rem 1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="caption" fontSize={14}>
              Already have a Compras store?
            </Typography>
            <Typography variant="caption" fontSize={14}>
              Get detailed products information in our{" "}
              <Link href="#">Help Center</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              height: "60%",
              width: "100%",
            }}
          >
            <FaqTree />
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            height: "60%",
            width: { xs: "100%", sm: "60%" },
          }}
        >
          <img
            src="https://img.freepik.com/vecteurs-libre/idee-strategie-croissance-benefices-solution-developpement-commercial_335657-3160.jpg?w=2000"
            alt="help"
            style={{
              objectFit: "fill",
              objectPosition: "center",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
}
