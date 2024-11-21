import React from "react";
import styled from "styled-components";

const QuestionTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

export default QuestionTitle;

const Title = styled.div`
  width: fit-content;
  margin-bottom: 3px;
  color: #4a4a4a;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: left;
`;
