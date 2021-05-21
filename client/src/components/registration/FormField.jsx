import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
const FormField = (props) => {
  return (
    <Field
      style={{ marginBottom: "0.75rem" }}
      component={TextField}
      variant="outlined"
      name={props.name}
      type={props.type}
      label={props.label}
      fullWidth
    />
  );
};

export default FormField;
