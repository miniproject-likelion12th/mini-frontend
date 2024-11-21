import React from "react";
import styled from "styled-components";

const WarningText = ({ text, display }) => {
  const show = display ? "flex" : "none";
  return (
    <Wrapper>
      <Display style={{ display: `${show}` }}>
        <Logo />
        <Text>{text}</Text>
      </Display>
    </Wrapper>
  );
};

export default WarningText;

const Wrapper = styled.div`
  width: 100%;
  height: 33px;
`;

const Display = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: "warning-logo.svg",
})`
  width: 13px;
  height: 13px;
`;

const Text = styled.div`
  color: #e2725b;
  font-family: "YiSunShinDotumB";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
