import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
const DashboardAction = (props) => {
  const len = props.profile.profile.data.profile.length === 0 ? true : false;
  return (
    <div style={{ margin: "1rem 0 0 2rem" }}>
      <Link to="/edit-profile" component={Button} disabled={len}>
        <AccountCircleRoundedIcon />
        Edit Profile
      </Link>
      <Link to="/add-expirence" component={Button} disabled={len}>
        <WorkIcon />
        Add Expirence
      </Link>
      <Link to="/add-education" component={Button} disabled={len}>
        <SchoolIcon />
        Add Education
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { profile: state.userProfile };
};

export default connect(mapStateToProps)(DashboardAction);
