import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
/** Variables */
/** Load images */
const images = require.context("../pics/site-banner/", true);
/** Structure of the link card */
const RepoCard = (props) => {
  return (
    <Card
      className="linkcard"
      onClick={() => {
        window.open("https://broj-ect.github.io/" + props.name, "_self");
      }}
      onAuxClick={(event) => {
        if (event.button === 1) {
          window.open("https://broj-ect.github.io/" + props.name, "_blank");
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="75"
          image={images("./" + props.name + ".png")}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h3" className="h1">
            {props.fullname}
          </Typography>
          <Typography variant="h3" className="h2">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
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
        repo.map((item, i) => (
          <React.Fragment key={"frag" + i}>
            <hr className="space" key={"hr-" + i} />
            <RepoCard
              key={item.name + i}
              name={item.name}
              fullname={item.fullname}
              desc={item.desc}
            />
          </React.Fragment>
        ))}
      <hr className="space" />
    </>
  );
};
/** */
export default Repo;
