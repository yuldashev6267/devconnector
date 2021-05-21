import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { userLogin } from "../actions";
import Registration from "../components/registration/Registration";
import FormField from "../components/registration/FormField";
const Signin = (props) => {
  return (
    <Registration
      text="Sign In"
      values={{ email: "", password: "" }}
      errorValidation={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required"),
      })}
      registerUser={(values) => props.userLogin(values)}
      formType="Sign In"
      passType="Forgot password"
      location="/signup"
      locationText="Don't have an account?Sign up"
    >
      <FormField name="email" type="email" label="Email" />
      <FormField name="password" type="password" label="Password" />
    </Registration>
  );
};
const mapStateToProps = (state) => {
  return { registerMe: state.registerMe };
};

export default connect(mapStateToProps, { userLogin })(Signin);
