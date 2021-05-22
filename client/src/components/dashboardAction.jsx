import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
const DashboardAction = (props) => {
  return (
    <div style={{ margin: "1rem 0 0 2rem" }}>
      <Link
        to="/edit-profile"
        component={Button}
        variant="outlined"
        style={{ marginRight: "4px" }}
      >
        <AccountCircleRoundedIcon color="primary" />
        Edit Profile
      </Link>
      <Link
        to="/add-expirence"
        component={Button}
        variant="outlined"
        style={{ marginRight: "4px" }}
      >
        <WorkIcon color="primary" />
        Add Expirence
      </Link>
      <Link to="/add-education" component={Button} variant="outlined">
        <SchoolIcon color="primary" />
        Add Education
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { profile: state.userProfile };
};

export default connect(mapStateToProps)(DashboardAction);
