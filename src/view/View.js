import React from "react";
import styled from "styled-components";
import Banner from "./component/Banner";
import MenuBanner from "./component/MenuBanner";
import CategoryBtn from "./component/CategoryBtn";
import PeriodBtn from "./component/PeriodBtn";
import Card from "./component/Card";
// import { useNavigate } from "react-router";

const View = () => {
  // 예시 데이터
  const title = "건강한 삶";
  const category = "health_exercise";
  const motive = "건강을 유지하고 체력을 기르기";
  const period = "short_term";
  const is_achieved = false;
  const goals = [
    {
      id: 3,
      year: null,
      month: 1,
      content: "헬스장 3개월 등록하기",
      is_done: false,
    },
    {
      id: 4,
      year: null,
      month: 4,
      content: "유산소 운동 30분 하기",
      is_done: false,
    },
    {
      id: 5,
      year: null,
      month: 9,
      content: "주 3회 운동하기",
      is_done: false,
    },
  ];

  return (
    <Wrapper>
      <Banner />
      <MenuBanner />
      <Container>
        <CategoryContiner>
          <CategoryBtn />
        </CategoryContiner>
        <PeriodContiner>
          <PeriodBtn />
        </PeriodContiner>
        <Card
          title={title}
          category={category}
          motive={motive}
          period={period}
          is_achieved={is_achieved}
          goals={goals}
        />
      </Container>
    </Wrapper>
  );
};

export default View;

const Wrapper = styled.div`
  width: 393px;
  min-height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfefd;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

const CategoryContiner = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const PeriodContiner = styled.div`
  display: flex;
  padding-left: 22px;
  width: 100%;
`;
