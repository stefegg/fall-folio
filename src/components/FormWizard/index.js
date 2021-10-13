import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, ButtonWrapper, DoubleInput } from "./styles";
import { Button, InputField } from "../index";

const FormWizard = ({ pages, onSubmit }) => {
  const [pageNum, setPageNum] = useState(1);
  const getText = () => {
    if (pages && pageNum !== pages.length) {
      return "Continue";
    } else return "Submit";
  };
  const clickPage = () => {
    if (pages && pageNum !== pages.length) {
      setPageNum(pageNum + 1);
    } else console.log("done");
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
              value={field.value}
              type={field.password ? "password" : "input"}
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
  const generatePage = (pages) => {
    return (
      pages &&
      pages.map((page) => {
        if (page.page === pageNum) {
          return generateInput(page);
        }
      })
    );
  };
  return (
    <Wrapper>
      {generatePage(pages)}
      <ButtonWrapper>
        <Button width={"100%"} text={getText()} onClick={() => clickPage()} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FormWizard;
