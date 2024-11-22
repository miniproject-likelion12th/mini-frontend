import React, { useState } from "react";
import { Container, Wrapper } from "../style-component/Wrapper";
import Banner from "../style-component/Banner";
import MenuBanner from "../style-component/MenuBanner";
import QuestionTitle from "../style-component/QuestionTitle";
import NoticeText from "../style-component/NoticeText";
import styled from "styled-components";
import WarningText from "../style-component/WarningText";
import BottomButton from "../style-component/BottomButton";
import GoalList from "./component/GoalList";

const WriteGoal = ({ period, duration_years }) => {
  const [showWaring, setShowWaring] = useState(false);

  return (
    <Wrapper>
      <Banner />
      <MenuBanner />
      <Container>
        <Ask>
          <QuestionTitle text="버킷리스트 달성을 위한" />
        </Ask>
        <Ask>
          <QuestionTitle text="구체적인 목표를 작성해볼까요?" />
          <NoticeText text="* 1개 이상 필수 입력 항목입니다." />
        </Ask>
        <GoalList period={period} duration_years={duration_years} />
        <WarningText
          text="필수 입력 항목을 1개 이상 작성해주세요."
          display={showWaring}
        />
        <BottomButton text="완료" />
      </Container>
    </Wrapper>
  );
};

export default WriteGoal;

const Ask = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 4px;
`;
