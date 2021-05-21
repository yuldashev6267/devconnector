import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin, myAccount, myProfile } from "../actions";
import { Typography, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DashboardAction from "../components/dashboardAction";
import Spinner from "../components/spiner/Spinner";
const Dashboard = ({
  registerMe: { user, isLoading, token },
  myAccount,
  myProfile,
  registerMe,
}) => {
  useEffect(() => {
    myAccount();
    myProfile();
  }, []);
  return user === null ? (
    <Spinner />
  ) : (
    <>
      <Typography
        variant="h4"
        style={{ color: "#32DE8A", margin: "4rem 0 0 2rem" }}
      >
        Dashboard
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: "2rem",
        }}
      >
        <PersonIcon />
        <Typography variant="h6">
          Welcome:
          <span style={{ color: "#32DE8A" }}>{user.data.user.name}</span>
        </Typography>
      </div>

      <DashboardAction></DashboardAction>
      <Button
        component={Link}
        to="/createprofile"
        variant="contained"
        size="small"
        style={{ backgroundColor: "#32DE8A", margin: "1rem 0 0 2rem" }}
      >
        Create Profile
      </Button>
    </>
  );
};
const mapStateToProps = (state) => {
  return { registerMe: state.registerMe };
};
export default connect(mapStateToProps, { myAccount, myProfile })(Dashboard);
