import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import * as React from "react";
import logo from "../assets/pics/placeholders/imgPlaceholder.png";

const Navigation = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" className="navigation">
      <Toolbar>
        <IconButton sx={{ flexGrow: 1 }}>
        <img src={logo} alt="Brand logo" className="appbar-brand" />
        <Typography component="h6" className="h8" sx={{ flexGrow: 1 }}>
          brand name placeholder
        </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navigation;
