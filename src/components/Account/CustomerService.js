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
const CustomerService = () => {


    return (
        <div>
            {
                /* There is already an h1 in the page, let's not duplicate it. */
            }


            <section>
                <h2>Customer Service Request</h2>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} textAlign="left">
                        <TextField id="Name" label="Name" variant="outlined" value="Girish Hebballi" sx={{ width: "50%" }} />

                    </Grid>
                    <Grid item xs={12} md={12} textAlign="left">
                        <TextField id="Phone" label="Phone" variant="outlined" value="+1 4129421271127" sx={{ width: "50%" }} />


                    </Grid>
                    <Grid item xs={12} md={12} textAlign="left">
                        <TextField id="Email" label="Email" variant="outlined" value="Girish.Hebballi@gmail.com" sx={{ width: "50%" }} />


                    </Grid>
                    <Grid item xs={12} md={12} textAlign="left">
                        <TextField id="Description" label="Description" variant="outlined" value="" sx={{ width: "50%" }} />


                    </Grid>
                    <Grid item xs={12} md={12}>

                    </Grid>

                    <Grid item xs={12} md={12} textAlign="left">
                        <TextField
                            id="filled-multiline-static"
                            label="Issue "
                            size="medium"
                            sx={{ width: "820px" }}
                            multiline
                            rows={10}
                            defaultValue="Default Value"
                        />

                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button size="small" variant="contained" align="left" sx={{ padding: '1px', margin: '2px', width: "200px" }} ><Typography variant="caption" component="h6" align="left">Submit</Typography></Button>  <br />&nbsp;

                    </Grid>
                </Grid>






            </section>





        </div>
    )
}

export default CustomerService;