import React, { useEffect, useState } from "react";
import {
  Wrapper,
  UpperRow,
  LowerRow,
  InnerWrapper,
  ButtonWrapper,
} from "./styles";
import { CarouselCard, Button } from "../index";
import PropTypes from "prop-types";
import useWidth from "../../utils/useWidth";

const CarouselRow = ({ data, title }) => {
  const [translateValue, setTranslateValue] = useState(0);
  const [lengthValue, setLengthValue] = useState(0);
  const width = useWidth();

  const clickNext = () => {
    if (lengthValue > data.length - 2) {
      return translateValue;
    } else {
      setTranslateValue(translateValue - getMoveValue());
      setLengthValue(lengthValue + 1);
      return translateValue;
    }
  };
  const clickBack = () => {
    if (lengthValue < 1) {
      return translateValue;
    } else {
      setTranslateValue(translateValue + getMoveValue());
      setLengthValue(lengthValue - 1);
      return translateValue;
    }
  };

  const getMoveValue = () => {
    if (width >= 1440) {
      return 20;
    }
    if (width >= 1024) {
      return 20;
    }
    if (width >= 768) {
      return 33.5;
    }
    return;
  };

  const checkNextDisabled = () => {
    if (width >= 1440 && data.length <= 5) {
      return true;
    }
    if (width >= 1024 && data.length <= 3) {
      return true;
    }
    if (width >= 768 && data.length <= 3) {
      return true;
    }
    if (lengthValue > data.length - 2) {
      return true;
    }
    return false;
  };

  const checkPrevDisabled = () => {
    if (lengthValue < 1) {
      return true;
    }
    return false;
  };
  return (
    <Wrapper>
      <UpperRow>
        {title}
        <ButtonWrapper>
          <Button
            text={"<"}
            onClick={() => clickBack()}
            width={"32px"}
            height={"32px"}
            borderRadius={"50px"}
            disabled={checkPrevDisabled()}
          />
          <Button
            text={">"}
            onClick={() => clickNext()}
            width={"32px"}
            height={"32px"}
            borderRadius={"50px"}
            disabled={checkNextDisabled()}
          />
        </ButtonWrapper>
      </UpperRow>
      <LowerRow>
        <InnerWrapper data={data} translateValue={translateValue}>
          {data && data.map((item, index) => <CarouselCard />)}
        </InnerWrapper>
      </LowerRow>
    </Wrapper>
  );
};

export default CarouselRow;
