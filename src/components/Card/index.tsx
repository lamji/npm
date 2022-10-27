import React from "react";
import Box from "@mui/material/Box";
import { Grid, Divider, CardMedia } from "@mui/material";
import "../../styles/Styles.css"

export interface cardProps {
  dataIn?: {
    title?: string,
    image?: string,
    quantity?: number
  };
}

function index(props: cardProps) {
  return (
    <Box sx={{ my: 2, p: 1, border: "1px solid gray", borderRadius: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Box sx={{width: 50, p:1 }}>
            <CardMedia
              component="img"
              height="30"
              image={props?.dataIn?.image}
              alt={props?.dataIn?.title}
            />
          </Box>
        </Grid>
        <Grid item xs={3} sx={{p:1}}>
          {props?.dataIn?.title}
        </Grid>
        <Grid item xs={4} sx={{p:1}}>
          <span className="qtybutton">-</span><span>{props?.dataIn?.quantity}</span><span className="qtybutton">+</span>
        </Grid>
        <Grid item xs={3} sx={{p:1}}>
          price
        </Grid>
      </Grid>
    </Box>
  );
}

export default index;
