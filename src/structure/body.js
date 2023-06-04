import { Grid } from "@mui/material";
import * as React from "react";
import Repo from "../assets/components/repocard";
/** Variables */
/** Structure of the body */
const Body = () => {
  return (
    <Grid container spacing={0}>
      <Grid item md={1}></Grid>
      <Grid container item spacing={0} xs={12} md={10} className="upperBody">
        <Grid item xs={1}></Grid>
        <Grid item xs={10} className="body">
          <Repo />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid item md={1}></Grid>
    </Grid>
  );
};
/** */
export default Body;
