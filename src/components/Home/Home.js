import { Button, Card, CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import EventBarChart from "../Charts/EventBarChart";
import EventDoughnutChart from "../Charts/EventDoughnutChart";

const Home = () => {
    return (
        <Grid container spacing={2} flexShrink={1}>
                        <Grid item xs={1} sx={{ height: '50%!important'}} >
</Grid>
            <Grid item xs={3} sx={{ height: '50%!important'}} >
                <Card sx={{ boxShadow: '15', margin: '2%', padding: '0%', overflow: "hidden" }} >
                    <CardContent>
                            <Typography variant="h5" component="h5" align="left" color="primary" sx={{ fontWeight: "bold" }}>
                                Trend
                            </Typography>
                            <Divider />
          
                                    <EventDoughnutChart />
          
               
                        <Divider />



                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>



            <Grid item xs={4} sx={{ height: '50%!important'}} >
                <Card sx={{ boxShadow: '15', margin: '2%', padding: '0%', overflow: "hidden" }} >
                    <CardContent>
                            <Typography variant="h5" component="h5" align="left" color="primary" sx={{ fontWeight: "bold" }}>
                                Feedback on presentation
                            </Typography>
                            <Divider />
          
                                    <EventBarChart />
          
               
                        <Divider />



                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={3} sx={{ height: '50%!important'}} >
                <Card sx={{ boxShadow: '15', margin: '2%', padding: '0%', overflow: "hidden" }} >
                    <CardContent>
                            <Typography variant="h5" component="h5" align="left" color="primary" sx={{ fontWeight: "bold" }}>
                                Reply to question
                            </Typography>
                            <Divider />
                            <Typography variant="caption" component="h5" align="left" color="primary" sx={{ fontWeight: "bold" }}>
                                Is there any discount on this item?                                  <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px'}} ><Typography variant="caption" component="h6" align="left">Reply</Typography></Button>  <br/>&nbsp;

                            </Typography>
                            <Typography variant="caption" component="h5" align="left" color="primary" sx={{ fontWeight: "bold" }}>
                                Does it come with charger ?                                 <Button size="small" variant="outlined" align="left" sx={{padding: '1px',  margin: '2px'}} ><Typography variant="caption" component="h6" align="left">Reply</Typography></Button>  <br/>&nbsp;

                            </Typography>
               
                        <Divider />



                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
    );
}
export default Home;