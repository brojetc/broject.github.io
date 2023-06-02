import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";

/** Load images */
const images = require.context("../assets/pics/site-banner/", true);

/** Load list of sites from the server
 *  After load create link cards
 */
const Repo = () => {
  let [repo, setRepo] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://broj-ect-db.up.railway.app/api/v1/github-broj-etc/repo`)
      .then((response) => response.json())
      .then((resp) => setRepo(resp));
  }, []);
  return (
    <>
      {repo &&
        repo.map((item, i) => <RepoCard key={item + i} name={item.name} />)}
    </>
  );
};

/** Structure of the link card */
const RepoCard = (props) => (
  <Card
    className="linkcard"
    onClick={() => {
      window.location.href = "https://broj-ect.github.io/" + props.name;
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="75"
        image={images("./"+props.name+".png")}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="h3">{props.name}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

/** Structure of the body */
const Body = () => (
  <Grid container spacing={0}>
    <Grid item sm={1}></Grid>
    <Grid container item spacing={0} xs={12} sm={10} className="body">
      <Grid item xs={1}></Grid>
      <Grid item xs={10} className="body2">
        <Repo />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
    <Grid item sm={1}></Grid>
  </Grid>
);

export default Body;
