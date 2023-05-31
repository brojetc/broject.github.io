import { AppBar, Toolbar, Typography } from "@mui/material";
import * as React from "react";

const Footer = () => (
  <AppBar position="static" className="footer">
    <Toolbar>
      <Typography sx={{ flexGrow: 1 }} component="h6" className="h10 left">
        Left
      </Typography>
      <Typography sx={{ flexGrow: 1 }} component="h6" className="h10">
        ©2023? Antti Vesanto
      </Typography>
      <Typography sx={{ flexGrow: 1 }} component="h6" className="h10 right">
        Right
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
