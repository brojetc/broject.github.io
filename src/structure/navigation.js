import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import * as React from "react";
import logo from "../assets/pics/placeholders/imgPlaceholder.png";
/** Variables */
const brandname = "brand name placeholder";
const left = ["Home", "Second", "Third"];
const right = ["Login", "Logout"];
/** */
const Navigation = () => {
  const [menu, setMenu] = React.useState(null);
  const open = Boolean(menu);
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };
  return (
    <AppBar position="static" className="navigation">
      <Toolbar
        sx={{ display: { xs: "none", md: "flex" } }}
        className="navigation"
      >
        <IconButton sx={{ flexGrow: 1 }} className="navigation brand">
          <img src={logo} alt="Brand logo" className="appbar-brand" />
          <Typography component="h1" className="h1" sx={{ flexGrow: 1 }}>
            {brandname}
          </Typography>
        </IconButton>
        {left.map((link, i) => (
          <Button key={link + i}>
            <Typography variant="h4" className="h1">
              {link}
            </Typography>
          </Button>
        ))}
        <hr className="mediator" />
        {right.map((link, i) => (
          <Button key={link + i}>
            <Typography variant="h4" className="h1">
              {link}
            </Typography>
          </Button>
        ))}
      </Toolbar>
      <Toolbar
        sx={{ display: { xs: "flex", md: "none" } }}
        className="navigation"
      >
        <IconButton sx={{ flexGrow: 1 }} className="navigation brand">
          <img src={logo} alt="Brand logo" className="appbar-brand" />
          <Typography component="h1" className="h1" sx={{ flexGrow: 1 }}>
            {brandname}
          </Typography>
        </IconButton>
        <hr className="mediator" />
        <Button
          id="menubtn"
          aria-controls={open ? "menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Typography variant="h4" className="h1">
            menu
          </Typography>
        </Button>
        <Menu
          id="menu"
          className="menu"
          anchorEl={menu}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
        >
          {left.map((link, i) => (
            <MenuItem key={link + i}>
              <Typography variant="h4" className="h1">
                {link}
              </Typography>
            </MenuItem>
          ))}
          <Divider />
          {right.map((link, i) => (
            <MenuItem key={link + i}>
              <Typography variant="h4" className="h1">
                {link}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
/** */
export default Navigation;
