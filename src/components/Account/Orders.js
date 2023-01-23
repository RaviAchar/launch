import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Card, CardActions, CardContent, CardMedia, Chip, Divider, Grid, TextField, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate()

    const orders = [1,2,3];
    return (
        <>
        { orders.map( (ord) => (
            <div>
            <Card sx={{ boxShadow: '15', margin: '2%', padding: '0%', overflow: "hidden" }} >
                <CardContent>
                    <section>
                        <Typography variant="h5" component="h5" align="left" color="primary" sx={{ fontWeight: "bold" }}>
                            Lenovo Idea pad laptop, 32 GB Ram, 500GB HDD, White
                        </Typography>
                        <Divider />
                        <Grid container >
                            <Grid item xs={4} md={4}>
                                <img src="http://localhost:3001/laptop.jpeg" />
                            </Grid>
                            <Grid item xs={4} md={4}>


                                <Typography variant="caption" component="h6" align="left">
                                    With an updated suite of built-in ThinkShield security solutions, safeguards your ThinkPad X1 Carbon Gen 9 and your data. Biometrics provide an extra-secure fingerprint reader that is standard and is integrated with the power button—so you can log in and boot up instantaneously. Human-presence detection automatically locks your device when you move away, and in combination with the optional IR camera, it enables zero-touch login even from sleep. Plus, choose the PrivacyGuard display panel to ensure wandering eyes can’t see what’s on your screen.

                                </Typography>
                                <Typography variant="caption" component="h6" align="left">
                                    In Stock
                                </Typography>





                            </Grid>
                            <Grid item xs={4} md={4} align="center">
                                &nbsp;
                                <Button size="small" variant="outlined" align="left" sx={{padding: '1px', margin: '2px', width: "200px"}} > <Typography  variant="caption" component="h6" align="left"> View Item </Typography></Button> <br/>&nbsp;
                                <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px', width: "200px"}} ><Typography variant="caption" component="h6" align="left" onClick={() => navigate("/settings/tracking")}>Track Package</Typography></Button>  <br/>&nbsp;
                                <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px', width: "200px"}} ><Typography variant="caption" component="h6" align="left">Return Items</Typography></Button>  <br/>&nbsp;
                                <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px', width: "200px"}} ><Typography variant="caption" component="h6" align="left">Get Help</Typography></Button>  <br/>&nbsp;
                                <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px', width: "200px"}} ><Typography variant="caption" component="h6" align="left">Write a product review</Typography></Button>  <br/>&nbsp;
                                <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px', width: "200px"}} ><Typography variant="caption" component="h6" align="left">Download Receipt</Typography></Button>  <br/>&nbsp;
                            </Grid>

                            <Grid item xs={6} md={6}>

                            </Grid>
                        </Grid>
                    </section>
                    <br />
                    <Divider />

                    <Grid container sx={{ padding: "2%" }} >
                        <Grid item xs={4} md={4}>
                            <Typography variant="h6" component="h5" align="left">
                                Order Placed
                            </Typography>
                            <Typography variant="caption" component="h5" align="left">
                                Janauary 12, 2023
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography variant="h6" component="h5" align="left">
                                Shipped to 
                            </Typography>
                            <Typography variant="caption" component="h5" align="left">
                                Girish Hebballi
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography variant="h6" component="h5" align="left">
                                Total Amount 
                            </Typography>
                            <Typography variant="caption" component="h5" align="left">
                                <b>$599</b>
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>        
        </div>)
        )

    }
    </>
    )
}

export default Orders;