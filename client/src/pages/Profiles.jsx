import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PublicSharpIcon from "@material-ui/icons/PublicSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4rem auto",
  },
  grid: {
    backgroundColor: "#f4f4f4",
    border: "1px solid #f4f4f4",
    width: "80%",
    height: "10%",
  },
}));

const Profiles = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h2" style={{ color: "#17a2b8" }}>
          Developers
        </Typography>
        <div style={{ display: "flex" }}>
          <PublicSharpIcon style={{ marginTop: "2px" }} />
          <Typography variant="h6">
            Browse and connect with developers
          </Typography>
        </div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.grid}
        >
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
            }}
            src="https://images.pexels.com/photos/2775271/pexels-photo-2775271.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2775271.jpg&fm=jpg"
            alt=""
          />
          <div>
            <h3>John Doe</h3>
            <p>Developer At Microsoft</p>
            <p>Seattle,WA</p>
            <Button
              style={{ backgroundColor: "#17a2b8", color: "#f4f4f4" }}
              variant="contained"
            >
              View Profile
            </Button>
          </div>
          <ul>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
          </ul>
        </Grid>
      </Container>
    </>
  );
};

export default Profiles;
