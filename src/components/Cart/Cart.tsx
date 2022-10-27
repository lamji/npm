import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "../Card"
import useModel from "src/hooks/Cart/useModel";
import {CardProps} from "../../types"
import { HOCProvider } from "src/provider";


const Cart = (props: CardProps) => {
  const {dataIn} = props
  const MODEL = useModel({dataIn})

  console.log(MODEL)
  return (
    <Box sx={{ width: "90%", margin: "0 auto", flexGrow: 1, mt:5 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={8}
        sx={{p:2}}>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            sx={{
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "transparent",
              },
              color: "black",
              p:0
            }}
          >
            Continue Shopping
          </Button>
          <Divider sx={{ mt: 4 }} />
          <Typography
            variant="body1"
            fontWeight={700}
            color="initial"
            sx={{ mt: 3 }}
          >
            {" "}
            Shopping Cart
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "10px", color: "gray" }}
          >
            You have {MODEL?.cartQty} items in your cart
          </Typography>
          {MODEL?.state?.data?.map((res: any) => {
            return (
              <Box  key={res?.id}>
               <Card dataIn={res}/>
              </Box>

            )
          })}
        </Grid>
        <Grid item xs={4}
        sx={{p:2}}>
          Cart
        </Grid>
      </Grid>
    </Box>
  );
};

export default HOCProvider(
  Cart
);

