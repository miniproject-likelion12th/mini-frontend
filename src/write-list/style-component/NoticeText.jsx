import React from "react";
import styled from "styled-components";

const NoticeText = ({ text = "* 필수 입력 항목입니다." }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default NoticeText;

const Wrapper = styled.div`
  width: fit-content;
  color: #bababa;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
  letter-spacing: -0.1px;
`;
