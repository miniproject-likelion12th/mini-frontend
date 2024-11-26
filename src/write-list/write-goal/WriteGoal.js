import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router";
import Cookies from "js-cookie";
import apiCall from "../../api/Api";
import Loading from "../../component/common/Loading";

const WriteGoal = () => {
  const location = useLocation();
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showWaring, setShowWaring] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const request = location.state.request;
  const token = Cookies.get("access_token");

  const CreateBucket = async () => {
    request["goals"] = [...new Set(goals)];
    if (!goals.length) {
      setShowWaring(true);
      return;
    }
    setLoading(true);

    try {
      const response = apiCall("bucketlist/", "POST", request, token);
      setLoading(false);
      setModalOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <Wrapper>
        <Banner backButton={modalOpen ? null : true} />
        <ModalPosition>
          {modalOpen && <ResultModal />}
          <MenuBanner />
          <NewContainer>
            <Ask>
              <QuestionTitle text="버킷리스트 달성을 위한" />
            </Ask>
            <Ask>
              <QuestionTitle text="구체적인 목표를 작성해볼까요?" />
              <NoticeText text="* 1개 이상 필수 입력 항목입니다." />
            </Ask>

            <GoalList
              request={request}
              setGoals={setGoals}
              loading={loading}
              setLoading={setLoading}
            />

            <WarningText
              text="필수 입력 항목을 1개 이상 작성해주세요."
              display={showWaring}
            />
            <ButtonPosition>
              <BottomButton text="완료" onClick={CreateBucket} />
            </ButtonPosition>
          </NewContainer>
        </ModalPosition>
      </Wrapper>
    </>
  );
};

export default WriteGoal;

const ModalPosition = styled.div`
  min-height: 743px;
  position: relative;
`;

const NewContainer = styled(Container)`
  min-height: 635px;
  position: relative;
`;

const Ask = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 4px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: -60px; /* 화면 하단에 고정 */
`;
