import React, { useEffect, useState } from "react";
import { FormWizard } from "../../components/index";

const SignUp = () => {
  const fields = [
    {
      type: "input",
      title: "First Name",
      borderColor: "blue",
      value: "firstName",
    },
    {
      type: "input",
      title: "Last Name",
      borderColor: "blue",
      value: "lastName",
    },
    {
      type: "input",
      title: "Address Line 1",
      borderColor: "blue",
      value: "addressOne",
    },
    {
      type: "input",
      title: "Address Line 2",
      borderColor: "blue",
      value: "addressTwo",
    },
    {
      type: "doubleInput",
      titleOne: "State",
      titleTwo: "City",
      borderColor: "blue",
      valueOne: "state",
      valueTwo: "City",
    },
  ];
  return <FormWizard pages={fields.length} fields={fields} />;
};

export default SignUp;
