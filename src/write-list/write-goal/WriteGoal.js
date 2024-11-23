import React, { useState } from "react";
import { Container, Wrapper } from "../style-component/Wrapper";
import QuestionTitle from "../style-component/QuestionTitle";
import NoticeText from "../style-component/NoticeText";
import styled from "styled-components";
import WarningText from "../style-component/WarningText";
import BottomButton from "../style-component/BottomButton";
import GoalList from "./component/GoalList";
import ResultModal from "./component/ResultModal";
import Banner from "../style-component/Banner";
import MenuBanner from "../style-component/MenuBanner";

const WriteGoal = ({ period = "short_term", duration_years }) => {
  const [showWaring, setShowWaring] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const CreateBucket = () => {
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <Banner />
      <ModalPosition>
        {!modalOpen && <ResultModal />}
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
          <BottomButton text="완료" onClick={CreateBucket} />
        </Container>
      </ModalPosition>
    </Wrapper>
  );
};

export default WriteGoal;

const ModalPosition = styled.div`
  position: relative;
`;

const Ask = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 4px;
`;
