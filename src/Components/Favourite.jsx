import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import StoreCard from "./Atoms/StoreCard";

function Favourite() {
  const selector = useSelector((state) => state.stores.favourite);
  return (
    <Box sx={{ width: "100%", padding: "1rem" }}>
      {selector.length ? (
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 5, sm: 15 }}
        >
          {selector.map((fav, ind) => {
            return (
              <Grid item xs={5} key={ind}>
                <StoreCard
                  title={fav.title}
                  closeShop={fav.closeShop}
                  Fav={fav.isFav}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box
          component="img"
          src="https://i.pinimg.com/originals/c5/a4/fc/c5a4fc63f838347e67e0b6b80ab1c795.gif"
          sx={{
            objectFit: "contain",
            height: { xs: "50%", sm: "30%" },
            width: { xs: "50%", sm: "30%" },
            position: "relative",
            top: 100,
            left: { xs: 50, sm: 500 },
          }}
        />
      )}
    </Box>
  );
}
export default Favourite;
