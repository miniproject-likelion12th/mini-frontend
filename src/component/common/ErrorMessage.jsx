import React from "react";
import ErrorIcon from "../../assets/img/ErrorIcon.svg";
import styled from "styled-components";

const ErrorMessage = ({ text, style }) => {
  return (
    <ErrorContainer style={style}>
      <ErrorIconImg src={ErrorIcon} alt="에러 아이콘" />
      {text}
    </ErrorContainer>
  );
};

export default ErrorMessage;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  color: #e2725b;
  font-family: "YiSunShinDotumM";
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  height: 20px;
  opacity: ${(props) => props.opacity || 1};
  transition: opacity 0.3s ease;
`;

const ErrorIconImg = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`;
