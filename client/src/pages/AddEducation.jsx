import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EducationAndExpirence from "../components/educationAndExpirence/EducationAndExpirence";

const AddEducation = (props) => {
  return (
    <EducationAndExpirence
      textTitle="Add An Education"
      textBody="Add any school or bootcamp that you have attend"
      type="Education"
      name1="school"
      name2="degree"
      name3="fieldofstudy"
      name4="description"
      text1="School or Bootcamp"
      text2="*Degree or certificate"
      text3="Field Of Study"
    />
  );
};

export default AddEducation;
