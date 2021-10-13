export const pages = [
  {
    page: 1,
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
