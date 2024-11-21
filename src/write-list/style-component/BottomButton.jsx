import React from "react";
import styled from "styled-components";

const BottomButton = ({ text, display, onClick }) => {
  return (
    <Wrapper style={display ? null : { display: "none" }} onClick={onClick}>
      {text}
    </Wrapper>
  );
};

export default BottomButton;

const Wrapper = styled.div`
  width: 336px;
  height: 42px;
  margin-bottom: 40px;
  border-radius: 5px;
  border: 2px solid #6fbc89;
  background: #fbfefd;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #6fbc89;
  font-family: "YiSunShinDotumB";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
