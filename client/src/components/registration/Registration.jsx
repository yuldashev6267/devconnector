import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  Container,
  CssBaseline,
  Typography,
  Avatar,
  Button,
  LinearProgress,
  Grid,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import FormField from "./FormField";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    margin: theme.spacing(1),
  },
  input: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));
const Registration = (props) => {
  const classes = useStyles();
  // if (props.registerMe.isAuthenticate) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{props.text}</Typography>
        <Formik
          initialValues={props.values}
          validationSchema={props.errorValidation}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              props.registerUser(values);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              {props.children}
              {isSubmitting && <LinearProgress />}
              <Button
                className={classes.submit}
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                spacing={1}
                fullWidth
              >
                {props.formType}
              </Button>

              {props.registerMe.isError ? (
                <Alert severity="error">
                  {props.registerMe.isError.message}
                </Alert>
              ) : null}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {props.passType}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={props.location} variant="body2">
                    {props.locationText}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return { registerMe: state.registerMe };
};
export default connect(mapStateToProps)(Registration);
