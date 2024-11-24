import React, { useState } from "react";
import styled from "styled-components";
import AllIcon from "../../assets/img/View_all.svg";
import TravelIcon from "../../assets/img/View_travel.svg";
import HobbyIcon from "../../assets/img/View_hobby_culture.svg";
import HealthIcon from "../../assets/img/View_health_exercise.svg";
import SpendingIcon from "../../assets/img/View_spending_saving_donating.svg";
import SelfIcon from "../../assets/img/View_self_development.svg";
import OthersIcon from "../../assets/img/View_others.svg";
import CareerIcon from "../../assets/img/View_career.svg";
import FamilyIcon from "../../assets/img/View_family_friends.svg";
import GreenBtn from "../../component/common/GreenBtn";
import View_MotiveImg from "../../assets/img/View_MotiveImg.svg";
import ViewChecked from "../../assets/img/ViewChecked.svg";
import ViewNonChecked from "../../assets/img/ViewNonChecked.svg";
import ViewEdit from "../../assets/img/ViewEdit.svg";

const categoryImg = (category) => {
  const categories = {
    hobby_culture: HobbyIcon,
    travel: TravelIcon,
    self_development: SelfIcon,
    health_exercise: HealthIcon,
    family_friends: FamilyIcon,
    spending_saving_donating: SpendingIcon,
    career: CareerIcon,
    others: OthersIcon,
  };
  return categories[category] || AllIcon;
};

const ViewCard = ({
  title,
  category,
  motive,
  period,
  is_achieved,
  goals = [],
}) => {
  const [goalState, setGoalState] = useState(goals);

  const handleCheck = (goalId) => {
    setGoalState((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, is_done: !goal.is_done } : goal
      )
    );
  };

  // goals를 month 또는 year 별로 그룹화
  const groupedGoals = goalState.reduce((acc, goal) => {
    const key = goal.month ? `${goal.month}개월` : `${goal.year}년`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(goal);
    return acc;
  }, {});

  return (
    <CardContainer>
      <CardHeader>
        <Title>{title}</Title>
        <HashtagContainer>
          <GreenBtn iconSrc={categoryImg(category)} text={category} />
          <GreenBtn text={period} />
          <GreenBtn text={is_achieved ? "달성" : "진행중"} />
        </HashtagContainer>
      </CardHeader>
      <LineDiv />
      <CardContent>
        <Motive>
          <MotiveTitle>버킷리스트가 된 계기</MotiveTitle>
          <MotiveImg src={View_MotiveImg} />
          <MotiveBox>{motive}</MotiveBox>
        </Motive>
        <Goals>
          <GoalTitle>구체적인 목표</GoalTitle>
          {Object.entries(groupedGoals).map(([key, goalArray]) => (
            <GoalContainer key={key}>
              <GreenBtn text={key} />
              {goalArray.map((goal) => (
                <EachGoal key={goal.id}>
                  <CheckImg
                    src={goal.is_done ? ViewChecked : ViewNonChecked}
                    onClick={() => handleCheck(goal.id)}
                  />
                  <GoalText>{goal.content}</GoalText>
                  <GoalEditImg src={ViewEdit} />
                </EachGoal>
              ))}
            </GoalContainer>
          ))}
        </Goals>
      </CardContent>
    </CardContainer>
  );
};

export default ViewCard;

// 스타일 정의
const CardContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background: #fbfefd;
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const HashtagContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(173, 173, 173, 0.38);
  margin: 10px 0;
`;
const CardContent = styled.div``;

// Motive
const Motive = styled.div`
  margin-bottom: 20px;
`;
const MotiveTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const MotiveImg = styled.img`
  display: block;
  margin-bottom: 10px;
`;
const MotiveBox = styled.div`
  background-color: #fbfefd;
  border: 1px solid #e5e5e5;
  padding: 10px;
  border-radius: 8px;
  line-height: 1.5;
`;

// Goals
const Goals = styled.div``;
const GoalTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const GoalContainer = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  border-left: 2px solid #6fbc89;
`;
const EachGoal = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
const CheckImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const GoalText = styled.div`
  flex: 1;
  font-size: 14px;
`;
const GoalEditImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
