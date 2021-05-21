import React from "react";
import EducationAndExpirence from "../components/educationAndExpirence/EducationAndExpirence";
const AddExpirence = () => {
  return (
    <EducationAndExpirence
      textTitle="Add An Expirence"
      textBody="Add any developer/programming positions that you have had in the past"
      placeHolder="Job Description"
      type="Expirence"
      name1="title"
      name2="companyName"
      name3="location"
      name4="description"
      text1="*Job Title"
      text2="*Company"
      text3="Location"
    />
  );
};

export default AddExpirence;
