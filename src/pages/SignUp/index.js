import React, { useEffect, useState } from "react";
import { FormWizard } from "../../components/index";
import { Wrapper } from "./styles";
import { data, validationSchema } from "./constants";
import { useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: validationSchema,
  });
  return (
    <Wrapper>
      <FormWizard data={data} formik={formik} />
    </Wrapper>
  );
};

export default SignUp;
