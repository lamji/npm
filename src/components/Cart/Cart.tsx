import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid, Divider, CardMedia } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import useModel from "src/hooks/Cart/useModel";
import { CartItemsProps } from "../../types";
import { HOCProvider } from "src/provider";
import "../../styles/Styles.css";

const Cart = (props: CartItemsProps) => {
  const Model = useModel(props);

  return (
    <Box className="BoxContainer">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sx={{ p: 2 }}>
          <Box className="hederButtonBox">
            <Button
              variant="text"
              className="Button ButtonDelete"
              startIcon={<ArrowBackIcon />}
              onClick={Model?.action?.shoplink}
            >
              Back to shop
            </Button>
            <Button
              variant="contained"
              className="ButtonCheckout"
              endIcon={<ArrowForwardIcon />}
              onClick={Model?.handleDataOut}
            >
              Checkout ₱{Model?.numberWithCommas(Model?.total.toFixed(2))}
            </Button>
          </Box>

          <Divider sx={{ mt: 4 }} />
          <Typography
            variant="body1"
            fontWeight={700}
            color="initial"
            sx={{ mt: 3 }}
          >
            Shopping Cart
          </Typography>
          <Typography
            variant="body1"
            className="Secondary-Text"
          >
            You have {Model?.cartQty} items in your cart
          </Typography>
          <Box>
            {Model?.CartItems.length != 0 ? (
              Model?.CartItems?.data.length > 0 ? 
              (
                Model?.CartItems?.data.map((cartItem: any) => {
                  return (
                    <Box className="BoxCard" key={cartItem?.id} >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={2}>
                          <Box sx={{ width: 50, p: 1 }}>
                            <CardMedia
                              component="img"
                              height="30"
                              image={cartItem.image}
                              alt={cartItem?.title}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={3} sx={{ p: 1 }}>
                          {cartItem?.title}
                        </Grid>
                        <Grid item xs={3} className="qtyWrapper" >
                          <span
                            className="qtybutton"
                            onClick={() => Model?.action?.decreaseQty(cartItem?.id)}
                          >
                            -
                          </span>
                          <Box className="qtyController">
                            <Typography variant="body1">{cartItem.quantity}</Typography>
                          </Box>

                          <span
                            className="qtybutton"
                            onClick={() => Model?.action?.increaseQty(cartItem?.id)}
                          >
                            +
                          </span>
                        </Grid>
                        <Grid item xs={3} sx={{ p: 1 }}>
                          ₱ {Model?.numberWithCommas((cartItem?.quantity * cartItem?.price).toFixed(2))}
                        </Grid>
                        <Grid item xs={1} sx={{ p: 1 }} >
                          <Button
                            variant="text"
                            className="ButtonDelete"
                            startIcon={<DeleteIcon />}
                            onClick={() => Model?.action?.removeItems(cartItem?.id)}
                          ></Button>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })
              )
              : 
              (
                <Box className="BoxEmptyCart">
                  <Box sx={{
                    textAlign: "center"
                  }}>
                    <AddShoppingCartIcon />
                    <Typography variant="h6" fontWeight={700}>You don't have item in a cart</Typography>
                  </Box>
                </Box>
              )
        
            ) : (
             <></>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HOCProvider(Cart);
