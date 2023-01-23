import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Accounts = () => {


    return (
        <div>
            {
                /* There is already an h1 in the page, let's not duplicate it. */
            }


            <section>
                <h2>Customer Accounts</h2>
                <br />
                <Divider />
                <section>
                    <h4>Bank Accounts</h4>
                    <Grid container spacing={2}>

                        <Grid item xs={4} md={4}>
                            <TextField id="Routing Number" label="Routing Number" variant="outlined" value="**** **** **** 5555" sx={{ width: "50%" }} />

                        </Grid>
                        <Grid item xs={4} md={4}>
                            <TextField id="Account Number" label="Account Number" variant="outlined" value="**** **** **** 2355" sx={{ width: "50%" }} />


                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button size="small" variant="outlined" align="left" sx={{ padding: '1px', margin: '2px', width: "200px" }} ><Typography variant="caption" component="h6" align="left">Delete</Typography></Button>  <br />&nbsp;
                            <Button size="small" variant="outlined" align="left" sx={{ padding: '1px', margin: '2px', width: "200px" }} ><Typography variant="caption" component="h6" align="left">Save</Typography></Button>  <br />&nbsp;

                        </Grid>
                    </Grid>
                </section>
                <br />
                <Divider />
                <section>
                    <h4>Credit Card Details</h4>
                    <Grid container spacing={2}>

                        <Grid item xs={4} md={4}>
                            <TextField id="Credit Card Details" label="Credit Card Details" variant="outlined" value="**** **** **** 3125" sx={{ width: "50%" }} />


                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField id="Expiry" type="password" label="Expiry" variant="outlined" value="**** **** **** 3125" sx={{ width: "50%" }} />


                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TextField id="Security" type="password" label="Security" variant="outlined" value="**** **** **** 3125" sx={{ width: "50%" }} />


                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Button size="small" variant="outlined" align="left" sx={{ padding: '1px', margin: '2px', width: "200px" }} ><Typography variant="caption" component="h6" align="left">Delete</Typography></Button>  <br />&nbsp;
                            <Button size="small" variant="outlined" align="left" sx={{ padding: '1px', margin: '2px', width: "200px" }} ><Typography variant="caption" component="h6" align="left">Save</Typography></Button>  <br />&nbsp;

                        </Grid>

                    </Grid>
                </section>
                <Divider />

                <section>
                    <h4></h4>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                            <Button size="small" variant="contained" align="center" sx={{ padding: '1px', margin: '2px', width: "200px" }} ><Typography variant="caption" component="h6" align="left">Add New Card</Typography></Button>  <br />&nbsp;

                        </Grid>
               



                    </Grid>
                </section>
            </section>





        </div>
    )
}

export default Accounts;