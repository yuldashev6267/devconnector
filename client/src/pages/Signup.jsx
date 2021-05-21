import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

import { userRegistaration } from "../actions";
import Registration from "../components/registration/Registration";
import FormField from "../components/registration/FormField";
const Signup = (props) => {
  return (
    <Registration
      text="Sign Up"
      values={{ name: "", email: "", password: "" }}
      errorValidation={Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string().required("Required"),
      })}
      registerUser={(values) => props.userRegistaration(values)}
      formType="Sign up"
      passType=""
      location="/signin"
      locationText="Already have an account?Sign In"
    >
      <FormField name="name" type="text" label="Name" />
      <FormField name="email" type="email" label="Email" />
      <FormField name="password" type="password" label="Password" />
    </Registration>
  );
};
const mapStateToProps = (state) => {
  return { registerMe: state.registerMe };
};
export default connect(mapStateToProps, { userRegistaration })(Signup);
