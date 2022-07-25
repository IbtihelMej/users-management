import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
const onLogout = () => {
  localStorage.removeItem("kfdsa3UQ71V");
  window.location.href = "/signin";
};

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <PeopleAltOutlinedIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/app/users" className={classes.link}>
            Gestion des utiisateurs
          </Link>
        </Typography>

        <Button color="inherit" onClick={onLogout}>
          Se déconnecter
        </Button>
      </Toolbar>
    </AppBar>
  );
}
