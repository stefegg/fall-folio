import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, ButtonWrapper, DoubleInput } from "./styles";
import { Button, InputField } from "../index";

const FormWizard = ({ pages, borderColor, onSubmit, fields }) => {
  const [page, setPage] = useState(1);
  const getText = () => {
    if (pages && page !== pages) {
      return "Continue";
    } else return "Submit";
  };
  const clickPage = () => {
    if (pages && page !== pages) {
      setPage(page + 1);
    } else onSubmit();
  };
  return (
    <Wrapper borderColor={borderColor}>
      {fields &&
        fields.map((field, index) => {
          if (field.type === "input") {
            return (
              <InputField
                label={field.title}
                key={index}
                borderColor={field.borderColor}
                width={field.inputWidth}
                value={field.value}
              />
            );
          }
          if (field.type === "doubleInput") {
            return (
              <DoubleInput>
                <InputField
                  label={field.titleOne}
                  borderColor={field.borderColor}
                />
                <InputField
                  label={field.titleTwo}
                  borderColor={field.borderColor}
                />
              </DoubleInput>
            );
          }
        })}
      <ButtonWrapper>
        <Button width={"100%"} text={getText()} onClick={() => clickPage()} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FormWizard;
