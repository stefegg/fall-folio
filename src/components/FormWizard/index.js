import React, { useEffect, useState } from "react";
import {
  Header,
  SubHeader,
  Wrapper,
  ButtonWrapper,
  DoubleInput,
} from "./styles";
import { Button, InputField } from "../index";

const FormWizard = ({ data, formik }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pageField, setPageField] = useState(data[pageNum - 1].fields.length);
  useEffect(() => {
    checkDoubles(data[pageNum - 1].fields);
  }, [pageNum]);
  const getText = () => {
    if (data && pageNum !== data.length) {
      return "Continue";
    } else return "Submit";
  };
  const clickPage = () => {
    if (data && pageNum !== data.length) {
      setPageNum(pageNum + 1);
    } else console.log("done");
  };

  const generateHeaders = (page) => {
    return page.headers.map((header, index) => {
      switch (header.type) {
        case "header":
          return <Header key={index}>{header.title}</Header>;
        case "subHeader":
          return <SubHeader key={index}>{header.title}</SubHeader>;
      }
    });
  };

  const checkDisabled = () => {
    if (
      Object.keys(formik.errors).length <=
        pageField - Object.keys(formik.errors).length &&
      Object.values(formik.values)[0].length
      // Object.values(formik.values)[Object.values(formik.values.length) + 1]
      //   .length

      // && Object.value(formik.values[Object.keys(formik.values)])
    ) {
      return false;
    } else return true;
  };

  const checkDoubles = (fields) => {
    let count = data[pageNum - 1].fields.length;
    fields.map((field, index) => {
      let value = Object.values(field);
      if (value.includes("doubleInput")) {
        count = count + 1;
      }
      setPageField(count);
    });
  };

  const generateInput = (page) => {
    return page.fields.map((field, index) => {
      switch (field.type) {
        case "input":
          return (
            <InputField
              label={field.title}
              key={index}
              borderColor={field.borderColor}
              width={field.inputWidth}
              value={formik.values[`${field.value}`]}
              onChange={formik.handleChange(`${field.value}`)}
              type={field.password ? "password" : "input"}
              error={
                formik.touched[`${field.value}`] &&
                formik.errors[`${field.value}`]
              }
              onBlur={formik.handleBlur(`${field.value}`)}
            />
          );
        case "doubleInput":
          return (
            <DoubleInput key={index}>
              <InputField
                label={field.titleOne}
                borderColor={field.borderColor}
                key={field.indexOne}
              />
              <InputField
                label={field.titleTwo}
                borderColor={field.borderColor}
                key={field.indexTwo}
              />
            </DoubleInput>
          );
      }
    });
  };
  const generateContent = (type, data) => {
    return (
      data &&
      data.map((page) => {
        if (page.page === pageNum && type === "headers") {
          return generateHeaders(page);
        } else if (page.page === pageNum && type === "inputs") {
          return generateInput(page);
        }
      })
    );
  };
  console.log(
    // formik.values,
    Object.values(formik.values)[0],
    "page-----"
  );
  return (
    <Wrapper>
      {generateContent("headers", data)}
      {generateContent("inputs", data)}
      <ButtonWrapper>
        <Button
          width={"100%"}
          text={getText()}
          onClick={() => clickPage()}
          disabled={checkDisabled()}
          // disabled={disabled}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FormWizard;
