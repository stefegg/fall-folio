import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email Required"),
  password: Yup.string().required("Password is required"),
  repeatPassword: Yup.string().required("Repeat Password is required"),
  firstName: Yup.string().required("First name required"),
});

export const data = [
  {
    page: 1,
    headers: [
      {
        type: "header",
        title: "Please enter your e-mail address and choose a password",
      },
      {
        type: "subHeader",
        title: "Passwords must be at least 8 characters and match",
      },
    ],
    fields: [
      {
        type: "input",
        title: "E-mail",
        borderColor: "blue",
        value: "email",
      },
      {
        type: "input",
        title: "Password",
        borderColor: "blue",
        value: "password",
        password: true,
      },
      {
        type: "input",
        title: "Repeat Password",
        borderColor: "blue",
        value: "repeatPassword",
        password: true,
      },
    ],
  },
  {
    page: 2,
    headers: [
      {
        type: "header",
        title: "Please enter your name and address",
      },
    ],
    fields: [
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
        indexOne: "a",
        indexTwo: "b",
      },
      {
        type: "doubleInput",
        titleOne: "Zip Code",
        titleTwo: "Phone Number",
        borderColor: "blue",
        valueOne: "zipCode",
        valueTwo: "phoneNum",
        indexOne: "c",
        indexTwo: "d",
      },
    ],
  },
];
