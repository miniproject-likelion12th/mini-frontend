import React from "react";
import styled from "styled-components";

const PeriodButton = ({ clicked, setClicked }) => {
  const shortSrc = `bucket-period${
    clicked === "left" ? "/green" : ""
  }/단기버킷.svg`;
  const longSrc = `bucket-period${
    clicked === "right" ? "/green" : ""
  }/장기버킷.svg`;

  return (
    <Wrapper>
      <Image src={shortSrc} onClick={() => setClicked("left")} />
      <Image src={longSrc} onClick={() => setClicked("right")} />
    </Wrapper>
  );
};

export default PeriodButton;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 28px;
  margin-bottom: 177px;
`;

const Image = styled.img`
  width: 167px;
  height: 312px;
  cursor: pointer;
`;
