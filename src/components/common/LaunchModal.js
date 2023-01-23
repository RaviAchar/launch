import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Card, CardActions, CardContent, CardMedia, Divider, Grid, TextField, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import  StarHalfIcon from '@mui/icons-material/StarHalf';

const style = {
  position: 'absolute',
  top: '20%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: 200,
};

export default function LaunchModal({openModal}) {
  const [open, setOpen] = React.useState(openModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid spacing={1}>

    <Card sx={{ boxShadow: '15', margin: '2%', padding: '0%', overflow: "hidden"}} >
        <CardMedia

            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        />
        <CardContent>
            <section>
            <Typography variant="h5" component="h5" align="center" color="primary" sx={{ fontWeight: "bold"}}>
            Lenovo Laptop                                </Typography>
                <Divider />
                <Grid container >
                    <Grid item xs={4} md={4}>
                        <img src="http://localhost:3001/laptop.jpeg" />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h6" component="h5" align="left" sx={{ fontWeight: "bold"}}>
                            Lenovo Idea pad laptop, 32 GB Ram, 500GB HDD, White
                        </Typography>

                        <Typography variant="caption" component="h6" align="left">

                        </Typography>
                        <Typography variant="caption" component="h6" align="left">
                            In Stock
                        </Typography>

                         {/*  <Typography variant="caption" component="h6" color='primary' align="left">delete </Typography>
                     <Typography variant="caption" component="h6" color='primary' align="left"><TextField id="quantity" label="Quantity" variant="standard" value="1" width="10%!important" /> </Typography>
                        */}
                    </Grid>

                    <Grid item xs={2} md={2}>
                        <Typography variant="h5" component="h5" align="right">
                            $599                                </Typography>
                        <Typography variant="caption" component="h6" align="right">
                            Discount - $20
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>

                    </Grid>
                </Grid>
            </section>
            <br/>
            <Divider />

            <Grid container  sx={{padding: "2%"}} >
                <Grid item xs={4} md={4}>
                    <Typography variant="h5" component="h5" align="left">
                        Description
                    </Typography>
                </Grid>
                <Grid item xs={8} md={8}>
                    <Typography variant="caption" component="h5" align="left">
                    With an updated suite of built-in ThinkShield security solutions, safeguards your ThinkPad X1 Carbon Gen 9 and your data. Biometrics provide an extra-secure fingerprint reader that is standard and is integrated with the power button—so you can log in and boot up instantaneously. Human-presence detection automatically locks your device when you move away, and in combination with the optional IR camera, it enables zero-touch login even from sleep. Plus, choose the PrivacyGuard display panel to ensure wandering eyes can’t see what’s on your screen.                        

                    </Typography>
                </Grid>
   
            </Grid>
            <Divider />

            <Grid container  sx={{padding: "2%"}} >
                <Grid item xs={4} md={4}>
                    <Typography variant="h5" component="h5" align="left">
                        Event Link
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Typography variant="subtitle2" component="h5" align="left" sx={{ fontWeight: "bold"}}>
                    https://teams.microsoft.com/34676756
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Typography variant="subtitle2" component="h5" align="right" sx={{ fontWeight: "bold"}}>
                        At 10:30 on Friday 12th March 2023                                </Typography>
                </Grid>
            </Grid>            
            <Divider  />
            <Grid container sx={{padding: "2%"}} >
                <Grid item xs={4} md={4}>
                    <Typography variant="h5" component="h5" align="left">
                        Rating
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Typography variant="h5" component="h5" align="left">
                    <StarIcon color='warning'/>    <StarIcon color='warning'/>  <StarIcon color='warning'/>   <StarHalfIcon color='warning'/>  <StarOutlineIcon color='warning'/>             

                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} alignItems="left">
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
                    <Button size="small" variant="contained">Subscibe to the Event</Button> &nbsp;

                    <Button size="small" variant="contained" color="secondary" >Cancel</Button>
                </Grid>
            </Grid>
        </CardActions>
    </Card>
</Grid>
  );
}
