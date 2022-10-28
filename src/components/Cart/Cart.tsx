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
import { CardProps } from "../../types";
import { HOCProvider } from "src/provider";
import "../../styles/Styles.css";

const Cart = (props: CardProps) => {
  const MODEL = useModel(props);

  console.log(MODEL?.total)
  return (
    <Box sx={{ width: "90%", margin: "0 auto", flexGrow: 1, mt: 5 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sx={{ p: 2 }}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              onClick={MODEL?.action?.shoplink}
              sx={{
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "transparent",
                },
                color: "black",
                p: 0,
              }}
            >
              Back to shop
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={MODEL?.handleDataOut}
              sx={{
                background: "red",
                color: "white",
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "transparent",
                  color: "black",
                },
                p: 1,
              }}
            >
              Checkout ₱{MODEL?.total.toFixed(2)}
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
            color="initial"
            sx={{ fontSize: "10px", color: "gray" }}
          >
            You have {MODEL?.cartQty} items in your cart
          </Typography>
          <Box>
            {MODEL?.state.length != 0 ? (
              MODEL?.state?.data.length > 0 ? 
              (
                MODEL?.state?.data.map((res: any) => {
                  return (
                    <Box
                      sx={{
                        my: 2,
                        p: 1,
                        border: "1px solid gray",
                        borderRadius: 1,
                      }}
                      key={res?.id}
                    >
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
                              image={res.image}
                              alt={res?.title}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={3} sx={{ p: 1 }}>
                          {res?.title}
                        </Grid>
                        <Grid item xs={3} sx={{ p: 1 }}>
                          <span
                            className="qtybutton"
                            onClick={() => MODEL?.action?.decreaseQty(res?.id)}
                          >
                            -
                          </span>
                          <span>{res.quantity}</span>
                          <span
                            className="qtybutton"
                            onClick={() => MODEL?.action?.increaseQty(res?.id)}
                          >
                            +
                          </span>
                        </Grid>
                        <Grid item xs={3} sx={{ p: 1 }}>
                          ₱ {(res?.quantity * res?.price).toFixed(2)}
                        </Grid>
                        <Grid item xs={1} sx={{ p: 1 }}>
                          <Button
                            variant="text"
                            startIcon={<DeleteIcon />}
                            onClick={() => MODEL?.action?.removeItems(res?.id)}
                            sx={{
                              "&:hover": {
                                //you want this to be the same as the backgroundColor above
                                backgroundColor: "transparent",
                              },
                              "&:active": {
                                //you want this to be the same as the backgroundColor above
                                backgroundColor: "transparent",
                              },
                              color: "black",
                              p: 0,
                            }}
                          ></Button>
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })
              )
              : 
              (
                <Box sx={{
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <Box sx={{
                    textAlign: "center"
                  }}>
                    <AddShoppingCartIcon sx={{
                      width: 100
                    }}/>
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
