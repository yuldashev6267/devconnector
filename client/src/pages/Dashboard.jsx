import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin, myAccount, myProfile } from "../actions";
import { Typography, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import DashboardAction from "../components/dashboardAction";
import Spinner from "../components/spiner/Spinner";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import EducationAndExpirenceTable from "../components/EducationAndExpirenceTable/EducationAndExpirenceTable";
const Dashboard = ({
  registerMe: { user, isLoading, token },
  myAccount,
  myProfile,
  profile,
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
      {!profile.profile?.length ? (
        <div style={{ margin: "1rem 0 0 2rem" }}>
          <Typography>
            You have not yet set up a profile,please add some info
          </Typography>
          <Button
            component={Link}
            to="/createprofile"
            variant="outlined"
            size="medium"
          >
            <CreateTwoToneIcon color="primary" size="medium" />
            Create Profile
          </Button>
        </div>
      ) : (
        <>
          <DashboardAction></DashboardAction>
          <EducationAndExpirenceTable
            typoTitle="Expirence Credentials"
            profile={profile}
            name="Company"
            title="Title"
            years="Years"
          />
          <EducationAndExpirenceTable
            typoTitle="Education Credentials"
            type="Education"
            profile={profile}
            name="School"
            title="Degree"
            years="Years"
          />
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return { registerMe: state.registerMe, profile: state.userProfile };
};
export default connect(mapStateToProps, { myAccount, myProfile })(Dashboard);
