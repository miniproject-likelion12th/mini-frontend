import React from "react";
import styled from "styled-components";

const PeriodButtons = ({ selectedPeriod, onPeriodSelect }) => {
  const periods = ["전체", "단기", "장기", "달성"];

  return (
    <PeriodContainer>
      {periods.map((period) => (
        <PeriodButton
          key={period}
          isSelected={selectedPeriod === period}
          onClick={() => onPeriodSelect(period)}
        >
          <Dot isSelected={selectedPeriod === period} />
          {period}
        </PeriodButton>
      ))}
    </PeriodContainer>
  );
};

export default PeriodButtons;

const PeriodContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
`;

const PeriodButton = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  background: none;
  border: none;
  font-family: "YiSunShinDotumB";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.408px;
  color: ${(props) => (props.isSelected ? "#6FBC89" : "#7a7a7a")};
  cursor: pointer;

  &:hover {
    color: #6fbc89;
  }

  &:hover span {
    border: 1px solid #6fbc89;
    background-color: #6fbc89;
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? "#6FBC89" : "#fff")};
  border: ${(props) => (props.isSelected ? "none" : "1px solid #7a7a7a")};
`;
