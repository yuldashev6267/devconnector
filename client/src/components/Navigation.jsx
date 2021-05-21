import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Link,
  CssBaseline,
  Typography,
  Button,
} from "@material-ui/core";
import { deleteMe } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  "@global": {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
  },

  link: {
    margin: theme.spacing(1, 1.5),
    color: "white",
  },
}));

const Logout = (props) => {
  const classes = useStyles();
  return (
    <>
      <Button
        component={Link}
        variant="button"
        onClick={props.deleteUser}
        className={classes.link}
      >
        <ExitToAppIcon />
        Log out
      </Button>
    </>
  );
};

const Links = (props) => {
  const classes = useStyles();

  return (
    <>
      <Link
        component={RouterLink}
        to="/"
        color="white"
        variant="button"
        className={classes.link}
      >
        First Page
      </Link>
      <Link
        component={RouterLink}
        to="/signup"
        color="black"
        variant="button"
        className={classes.link}
      >
        Sign up
      </Link>
      <Link
        component={RouterLink}
        to="/signin"
        color="black"
        variant="button"
        className={classes.link}
      >
        Sign in
      </Link>
    </>
  );
};

const Navigation = ({
  registerMe: { isAuthenticate, isLoading },
  deleteMe,
}) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar variant="dense" className={classes.btn}>
          <Typography variant="h6" className={classes.toolbarTitle}>
            {"</>Devconnector"}
          </Typography>
          {!isAuthenticate || !localStorage.token ? (
            <Links />
          ) : (
            <Logout deleteUser={deleteMe} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    registerMe: state.registerMe,
  };
};
export default connect(mapStateToProps, { deleteMe })(Navigation);
