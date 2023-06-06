import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import {BigPic/**, Dia*/} from "./dialog";
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
/** Variables */
/** Load images */
const images2 = require.context("../pics/re2/", true);
/** */
const PicCard = (props) => {
  return (
    <Card
      className="piccard"
      onClick={(e) => {
        props.setDia(true);
        props.setPicsrc(images2(props.name));
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={images2(props.name)}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h3" className="h1">
            {props.name}
          </Typography>
          <Typography variant="h3" className="h2">
            Another textfield
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
/** */
const Pic = () => {
  /** Variables */
  const [dia, setDia] = React.useState(false);
  const [picsrc, setPicsrc] = React.useState(images2(images2.keys()[0]));
  return (
    <>
      <BigPic dia={dia} setDia={setDia} picsrc={picsrc} images={images2}/>
      {images2.keys().map((item, i) => (
        <React.Fragment key={"frag" + i}>
          <hr className="space" key={"hr-" + i} />
          <PicCard key={item.name + i} name={item} setDia={setDia} setPicsrc={setPicsrc} />
        </React.Fragment>
      ))}
    </>
  );
};
export { Repo, Pic };
