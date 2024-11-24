import React from "react";
import styled from "styled-components";
import { longTerm, shortTerm } from "../../definition/definition";

const PeriodButton = ({ clicked, setClicked }) => {
  const shortSrc = `bucket-period${
    clicked === shortTerm ? "/green" : ""
  }/단기버킷.svg`;

  const longSrc = `bucket-period${
    clicked === longTerm ? "/green" : ""
  }/장기버킷.svg`;

  return (
    <Wrapper>
      <Image src={shortSrc} onClick={() => setClicked(shortTerm)} />
      <Image src={longSrc} onClick={() => setClicked(longTerm)} />
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
