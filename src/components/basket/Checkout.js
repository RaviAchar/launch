import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Checkout = () => {
    return (
        <>
            <Grid spacing={1}>

                <Card sx={{ boxShadow: '15', margin: '2%', padding: '0%' }} >
                    <CardMedia

                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <section>
                            <h2>Shopping Cart</h2>
                            <Divider />
                            <Grid container >
                                <Grid item xs={4} md={4}>
                                    <img src="http://localhost:3001/laptop.jpeg" />
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Typography variant="h5" component="h5" align="left">
                                        Lenovo Idea pad laptop, 32 GB Ram, 500GB HDD, White
                                    </Typography>
                                    <Typography variant="caption" component="h6" align="left">
                                        In Stock
                                    </Typography>
                                    <Typography variant="caption" component="h6" color='primary' align="left">delete </Typography>
                                    <Typography variant="caption" component="h6" color='primary' align="left"><TextField id="quantity" label="Quantity" variant="standard" value="1" width="10%!important" /> </Typography>

                                </Grid>

                                <Grid item xs={4} md={4}>
                                    <Typography variant="h5" component="h5" align="left">
                                        $599                                </Typography>
                                    <Typography variant="caption" component="h6" align="left">
                                        Discount - $20
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>

                                </Grid>
                            </Grid>
                        </section>
                        <Divider />
                        <Grid container >
                            <Grid item xs={4} md={4}>
                                <Typography variant="h5" component="h5" align="center">
                                    Total
                                </Typography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Typography variant="h5" component="h5" align="left">&nbsp;
                                </Typography>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Typography variant="h5" component="h5" align="left">
                                    $579                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container >
                            <Grid item xs={4} md={4}>
                            </Grid>
                            <Grid item xs={4} md={4}>
                            </Grid>
                            <Grid item xs={4} md={4} align="left">
                                <Button size="small" variant="contained">Proceed to Checkout</Button> &nbsp;

                                <Button size="small" variant="contained" color="secondary" >Cancel</Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>



        </>
    );
}
export default Checkout;