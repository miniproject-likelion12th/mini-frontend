import React from "react";
import styled from "styled-components"; // styled-components import

const Button = ({ bgColor, color, text, onClick, disabled, style }) => {
  return (
    <CommonButton
      bgColor={bgColor}
      color={color}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {text}
    </CommonButton>
  );
};

export default Button;

const CommonButton = styled.button`
  width: 271px;
  height: 38px;
  flex-shrink: 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || "#6FBC89"};
  color: ${(props) => props.color || "#FBFEFD"};
  border: none;
  text-align: center;
  font-family: "YiSunShinDotumM";
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;
