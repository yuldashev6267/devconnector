import React from "react";
import { Link } from "react-router-dom";
import { Grid, CssBaseline, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  buttonRoot: {
    "& > *": {
      margin: theme.spacing(0.25),
      backgroundColor: "#32DE8A",
    },
  },
}));

const FirstPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid
        container
        item
        xs={false}
        md={12}
        className={classes.image}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Typography variant="h2" style={{ color: "#A5F8D3" }}>
          Developer Connector
        </Typography>
        <Typography variant="h5" style={{ color: "#32DE8A" }}>
          Create a developer profile/portfolio,share posts and get help from
          other developer
        </Typography>
        <div className={classes.buttonRoot}>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            size="small"
            disableFocusRipple
          >
            Sign up
          </Button>
          <Button
            component={Link}
            to="/signin"
            variant="contained"
            size="small"
            disableFocusRipple
          >
            login
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default FirstPage;
