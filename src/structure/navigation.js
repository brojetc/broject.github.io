import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";
import * as React from "react";
import logo from "../assets/pics/placeholders/imgPlaceholder.png";
/** Variables */
const images = require.context("../assets/pics/site-banner/", true);
const brandname = "brand name placeholder";
const left = ["Home", "Second", "Third"];
const right = [];
/** */
const Navigation = () => {
  const [menu, setMenu] = React.useState(null);
  const open = Boolean(menu);
  const handleClickMenu = (event) => {
    setMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setMenu(null);
  };
  /** */
  const [dialog, setDialog] = React.useState(false);
  /** */
  const handleOpenDialog = (event) => {
    setDialog(true);
  };
  /** */
  const handleCloseDialog = () => {
    setDialog(false);
  };
  /** */
  return (
    <AppBar position="static" className="navigation">
      {/** Links when window width > 900px */}
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
        <Button onClick={handleOpenDialog}>
          <Typography variant="h4" className="h1">
            Dialog
          </Typography>
        </Button>
        <Dialog open={dialog} onClose={handleCloseDialog} className="picdialog">
          <DialogContent className="bigpic"></DialogContent>
          <img src={images(images.keys()[0])} alt="bigboi" id="dialogpic" />
          <DialogContent className="smallpic">
            {images.keys().map((item, i) => (
              <img
                key={item + i}
                src={images(item)}
                alt={item}
                onClick={() => {
                  document.getElementById("dialogpic").src = images(item);
                }}
              />
            ))}
          </DialogContent>
        </Dialog>
      </Toolbar>
      {/** Menu when window width < 900px */}
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
          onClick={handleClickMenu}
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
          onClose={handleCloseMenu}
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
          <Button onClick={handleOpenDialog}>
            <Typography variant="h4" className="h1">
              Dialog
            </Typography>
          </Button>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
/** */
export default Navigation;
