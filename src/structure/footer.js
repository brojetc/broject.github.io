import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";

/** Variables */
const left = ["left"];
const middle = ["©2023? Antti Vesanto"];
const right = ["right"];
/** */
const Footer = () => {
  return (
    <AppBar position="static" className="footer">
      <Toolbar>
        {left.map((item, i) => (
          <Typography
            key={item + i}
            sx={{ flexGrow: 1 }}
            component="h4"
            className="h1 left"
          >
            {item}
          </Typography>
        ))}
        {middle.map((item, i) => (
          <Typography
            key={item + i}
            sx={{ flexGrow: 1 }}
            component="h4"
            className="h1"
          >
            {item}
          </Typography>
        ))}
        {right.map((item, i) => (
          <Typography
            key={item + i}
            sx={{ flexGrow: 1 }}
            component="h4"
            className="h1 right"
          >
            {item}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};
/** */
export default Footer;
