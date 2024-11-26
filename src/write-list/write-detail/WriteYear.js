import React, { useState } from "react";
import { Container, Wrapper } from "../style-component/Wrapper";
import QuestionTitle from "../style-component/QuestionTitle";
import NoticeText from "../style-component/NoticeText";
import { Ask } from "./WriteDetail";
import styled from "styled-components";
import WarningText from "../style-component/WarningText";
import BottomButton from "../style-component/BottomButton";
import { useLocation, useNavigate } from "react-router";
import Banner from "../style-component/Banner";
import MenuBanner from "../style-component/MenuBanner";

const WriteYear = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [years, setYears] = useState("");
  const [warning, setWarning] = useState("");
  const request = location.state.request;
  console.log(request);

  const moveToNext = () => {
    if (!years) {
      setWarning("필수 입력 항목을 모두 작성해주세요.");
      return;
    }
    if (isNaN(years) || years < 1) {
      setWarning("형식이 올바르지 않습니다.");
      return;
    }

    request["duration_years"] = years;
    navigate("/WriteGoal", { state: { request } });
  };

  return (
    <Wrapper>
      <Banner backButton={true} />
      <MenuBanner />
      <Container>
        <Ask>
          <QuestionTitle text="달성 기간을 설정해볼까요?" />
          <NoticeText />
        </Ask>
        <Input
          type="number"
          placeholder="목표 기간을 숫자로만 입력해주세요. (예 : 5)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
        <WarningText text={warning} display={!!warning} />
        <BottomButton text="다음" onClick={moveToNext} />
      </Container>
    </Wrapper>
  );
};

export default WriteYear;

const Input = styled.input`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 430px;
  padding-bottom: 6px;
  -moz-appearance: textfield; /* Firefox */
  -webkit-appearance: none; /* Chrome, Safari, Edge */
  appearance: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: 0;
  border-bottom: 1px solid #6fbc89;
  outline: 0;
  font-size: 14px;
  font-family: "YiSunShinDotumM";
  &::placeholder {
    color: #adadad;
  }
`;
