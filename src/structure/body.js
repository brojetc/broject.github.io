import { Grid } from "@mui/material";
import * as React from "react";

const Body = () => (
  <Grid container spacing={0}>
    <Grid item sm={1}>
    </Grid>
    <Grid item xs={12} sm={10}>
      <div className="body"></div>
    </Grid>
    <Grid item sm={1}>
    </Grid>
  </Grid>
);

export default Body;
