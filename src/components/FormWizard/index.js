import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
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
  const generateInput = (page) => {
    return page.fields.map((field, index) => {
      switch (field.type) {
        case "header":
          return <Header>{field.title}</Header>;
        case "subHeader":
          return <SubHeader>{field.title}</SubHeader>;
        case "input":
          return (
            <InputField
              label={field.title}
              key={index}
              borderColor={field.borderColor}
              width={field.inputWidth}
              value={formik[`${field.value}`]}
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
  const generatePage = (data) => {
    return (
      data &&
      data.map((page) => {
        if (page.page === pageNum) {
          return generateInput(page);
        }
      })
    );
  };
  return (
    <Wrapper>
      {generatePage(data)}
      <ButtonWrapper>
        <Button width={"100%"} text={getText()} onClick={() => clickPage()} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FormWizard;
