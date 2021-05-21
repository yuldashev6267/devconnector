import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const ProtectedRouter = ({
  component: Component,
  registerMe: { isAuthenticate, isLoading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticate && !isLoading ? (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return { registerMe: state.registerMe };
};

export default connect(mapStateToProps)(ProtectedRouter);
