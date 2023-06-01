import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";

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

const RepoCard = (props) => (
  <Card className="linkcard" onClick={()=> {window.location.href = "broj-ect.github.io/"+props.name}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="50"
        image="../assets/pics/placeholders/imgPlaceholder.png"
        alt="placeholder"
      />
      <CardContent>
        <Typography variant="h6" className="h5">
          {props.name}
        </Typography>
        <Typography variant="h6" className="h6">
          Website Website
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Body = () => (
  <Grid container spacing={0}>
    <Grid item sm={1}></Grid>
    <Grid item xs={12} sm={10}>
      <div className="body">
        <Grid container spacing={0}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Repo />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </Grid>
    <Grid item sm={1}></Grid>
  </Grid>
);

export default Body;
