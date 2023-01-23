import { Divider, Grid, TextField, Typography } from "@mui/material";
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
const Profile = () => {


    return (
        <div>
            {
                /* There is already an h1 in the page, let's not duplicate it. */
            }


            <section>
                <h2>Customer Profile</h2>

                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <TextField id="Name" label="Name" variant="outlined" value="Girish Hebballi" sx={{ width: "50%" }} />

                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField id="Phone" label="Phone" variant="outlined" value="+1 4694267167" sx={{ width: "50%" }} />


                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField id="Email" label="Email" variant="outlined" value="Girish.Hebballi@gmail.com" sx={{ width: "50%" }} />


                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField id="Name" label="Name" variant="outlined" value="Girish Hebballi" sx={{ width: "50%" }} />

                    </Grid>
                </Grid>

            </section>





        </div>
    )
}

export default Profile;