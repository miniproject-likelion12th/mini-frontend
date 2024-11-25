import React, { useState } from "react";
import styled from "styled-components";
import AllIcon from "../../assets/img/View_Category_Icon/View_all.svg";
import TravelIcon from "../../assets/img/View_Category_Icon/View_travel.svg";
import HobbyIcon from "../../assets/img/View_Category_Icon/View_hobby_culture.svg";
import HealthIcon from "../../assets/img/View_Category_Icon/View_health_exercise.svg";
import SpendingIcon from "../../assets/img/View_Category_Icon/View_spending_saving_donating.svg";
import SelfIcon from "../../assets/img/View_Category_Icon/View_self_development.svg";
import OthersIcon from "../../assets/img/View_Category_Icon/View_others.svg";
import CareerIcon from "../../assets/img/View_Category_Icon/View_career.svg";
import FamilyIcon from "../../assets/img/View_Category_Icon/View_family_friends.svg";

import GreenBtn from "../../component/common/GreenBtn";
import View_MotiveImg from "../../assets/img/View_MotiveImg.svg";
import ViewChecked from "../../assets/img/ViewChecked.svg";
import ViewNonChecked from "../../assets/img/ViewNonChecked.svg";
import ViewEdit from "../../assets/img/ViewEdit.svg";
import ViewDelete from "../../assets/img/ViewDelete.svg";
import ViewSend from "../../assets/img/ViewSend.svg";

import AchiveImg from "../../assets/img/AchiveImg.svg";
import NonAchiveImg from "../../assets/img/NonAchiveImg.svg";
import { useNavigate } from "react-router";
import ViewDeleteModal from "../../component/common/ViewDeleteModal";
import ViewAchiveModal from "../../component/common/ViewAchiveModal";

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

const translateCategory = (category) => {
  const categoryMap = {
    hobby_culture: "취미/문화",
    travel: "여행",
    self_development: "자기계발",
    health_exercise: "건강/운동",
    family_friends: "가족/친구",
    spending_saving_donating: "소비/저축/기부",
    career: "커리어",
    others: "기타",
  };
  return categoryMap[category] || "전체";
};

const translatePeriod = (period) => {
  const periodMap = {
    short_term: "단기",
    long_term: "장기",
    achieved: "달성",
  };
  return periodMap[period] || "전체";
};

const Card = ({
  id,
  title,
  category,
  motive,
  period,
  is_achieved,
  goals = [],
}) => {
  const navigate = useNavigate();
  const [goalState, setGoalState] = useState(goals);
  const [editGoalId, setEditGoalId] = useState(null); // 수정 중인 목표 ID
  const [currentEditContent, setCurrentEditContent] = useState(""); // 수정 중인 목표 내용
  const [isDoneState, setIsDoneState] = useState(
    goals.reduce((acc, goal) => {
      acc[goal.id] = goal.is_done; // 초기값 설정
      return acc;
    }, {})
  );
  const [newContent, setNewContent] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [achieveModalOpen, setAchieveModalOpen] = useState(false);

  const handleCheck = (goalId) => {
    setIsDoneState((prev) => ({
      ...prev,
      [goalId]: !prev[goalId], // true/false 토글
    }));
    // goalState 업데이트 (연동 필요 시 이 부분 유지)
    setGoalState((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, is_done: !goal.is_done } : goal
      )
    );
  };

  const handleEdit = (goalId) => {
    setGoalState((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, content: currentEditContent } : goal
      )
    );
    setEditGoalId(null); // 수정 완료 후 ID 초기화
    setCurrentEditContent(""); // 입력값 초기화
  };

  const groupedGoals = goals.length
    ? goals.reduce((acc, goal) => {
        const key = goal.month ? `${goal.month}개월` : `${goal.year}년`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(goal);
        return acc;
      }, {})
    : {};

  return (
    <>
      {deleteModalOpen && <ViewDeleteModal title={title} id={id} />}
      {achieveModalOpen && <ViewAchiveModal title={title} id={id} />}
      <CardContainer>
        <CardHeader>
          <Title>{title}</Title>
          <HashtagContainer>
            <GreenBtn
              iconSrc={categoryImg(category)}
              text={translateCategory(category)}
            />
            <GreenBtn text={translatePeriod(period)} />
            <GreenBtn text={is_achieved ? "달성" : "진행중"} />
            <CardEditImg
              src={ViewEdit}
              onClick={() => navigate("/ChoosePeriod")}
            />
            <CardDeleteImg
              src={ViewDelete}
              onClick={() => setDeleteModalOpen(true)}
            />
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
            {Object.entries(groupedGoals).length > 0 ? (
              Object.entries(groupedGoals).map(([key, goalArray]) => (
                <GoalContainer key={key}>
                  <GreenBtn text={key} />
                  {goalArray.map((goal) => (
                    <EachGoal key={goal.id}>
                      <GoalTextContianer>
                        <CheckImg
                          src={
                            isDoneState[goal.id] ? ViewChecked : ViewNonChecked
                          }
                          onClick={() => handleCheck(goal.id)}
                        />
                        <GoalText>{goal.content}</GoalText>
                        <GoalEditImg
                          src={ViewEdit}
                          onClick={() => {
                            setEditGoalId(goal.id);
                            setCurrentEditContent(goal.content); // 수정 시작 시 현재 내용 설정
                          }}
                        />
                        <GoalDeleteImg src={ViewDelete} />
                      </GoalTextContianer>

                      {editGoalId === goal.id && (
                        <GoalInputContianer>
                          <CheckImg
                            src={
                              isDoneState[goal.id]
                                ? ViewChecked
                                : ViewNonChecked
                            }
                            onClick={() => handleCheck(goal.id)}
                          />
                          <EditInput
                            type="text"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                          />
                          <GoalSendImg
                            src={ViewSend}
                            onClick={() => {
                              handleEdit(goal.id);
                              console.log("수정(추가) : ", goal.id); // 연동 후 console 정리
                            }}
                          />
                          <GoalDeleteImg src={ViewDelete} />
                        </GoalInputContianer>
                      )}
                    </EachGoal>
                  ))}
                </GoalContainer>
              ))
            ) : (
              <NoGoalsMessage>목표가 없습니다.</NoGoalsMessage>
            )}
          </Goals>
        </CardContent>
        <GreenLine />
        <AchieveContainer>
          {is_achieved ? (
            <NonAchieveBtn onClick={() => {}}>
              <AchieveImg src={AchiveImg} />
              <AchieveText style={{ color: "#6FBC89" }}>달성 완료</AchieveText>
            </NonAchieveBtn>
          ) : (
            <AchieveBtn onClick={() => setAchieveModalOpen(true)}>
              <AchieveImg src={NonAchiveImg} />
              <AchieveText style={{ color: "#979797" }}>
                버킷리스트 달성
              </AchieveText>
            </AchieveBtn>
          )}
        </AchieveContainer>
      </CardContainer>
    </>
  );
};

// 추가: 목표가 없을 때 표시할 메시지 스타일
const NoGoalsMessage = styled.div`
  font-size: 14px;
  color: #7a7a7a;
  text-align: center;
  margin-top: 20px;
`;

export default Card;

// 스타일 정의
const CardContainer = styled.div`
  margin: 7px auto 60px;
  width: 340px;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid #6fbc89;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
`;
const CardHeader = styled.div`
  margin-top: 17px;
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const Title = styled.div`
  color: #4a4a4a;
  font-family: "YiSunShinDotumB";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 104.762% */
  letter-spacing: -0.408px;
`;
const HashtagContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const CardEditImg = styled.img`
  margin-top: 5px;
  margin-left: 104px;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  cursor: pointer;
`;
const CardDeleteImg = styled.img`
  margin-top: 5px;
  margin-left: 3px;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  cursor: pointer;
`;
const LineDiv = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 1px;
  background: rgba(173, 173, 173, 0.38);
  background: rgba(173, 173, 173, 0.38);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
`;

// CardContent
const CardContent = styled.div`
  padding: 13px 11px 0;
`;

// Motive
const Motive = styled.div`
  margin: 0 auto 20px;
`;
const MotiveTitle = styled.div`
  color: #4a4a4a;
  font-family: "YiSunShinDotumB";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 129.412% */
  letter-spacing: -0.408px;
`;
const MotiveImg = styled.img`
  display: block;
  margin-left: 260px;
  margin-bottom: 0px;
`;
const MotiveBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 12px 10px;
  width: 270px;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 0.5px solid #6fbc89;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  color: #4a4a4a;
  font-family: "YiSunShinDotumM";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1px;
`;

// Goals
const Goals = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;
const GoalTitle = styled.div`
  color: #4a4a4a;
  font-family: "YiSunShinDotumB";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 129.412% */
  letter-spacing: -0.408px;
`;
const GoalContainer = styled.div`
  margin-top: 10px;
  padding-left: 10px;
`;
const EachGoal = styled.div`
  /* display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  position: relative; */
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 4px; /* 목표 간 간격 */
  margin-top: 10px;
  position: relative;
`;
const GoalInputContianer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 요소를 양쪽으로 정렬 */
  gap: 10px; /* 아이콘과 입력 필드 간격 */
  padding: 4px 0;
`;
const GoalTextContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 요소를 양쪽으로 정렬 */
  gap: 10px; /* 아이콘과 텍스트 간격 */
  padding: 4px 0;
`;

const CheckImg = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const GoalText = styled.div`
  flex: 1;
  color: #4a4a4a;
  font-family: "YiSunShinDotumM";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EditInput = styled.input`
  flex: 1;
  /* width: 228px; */
  border: none;
  border-bottom: 2px solid #6fbc89;
  outline: none;
  color: #4a4a4a;
  font-family: "YiSunShinDotumM";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const GoalSendImg = styled.img`
  bottom: -4px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  z-index: 1;
`;
const GoalEditImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
const GoalDeleteImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

// achive
const GreenLine = styled.div`
  width: 100%;
  height: 1px;
  background: #6fbc89;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
`;
const AchieveContainer = styled.div`
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  gap: 3px;
  padding: 14px 15px;
`;
const NonAchieveBtn = styled.div`
  cursor: pointer;
`;
const AchieveBtn = styled.div`
  cursor: pointer;
`;
const AchieveImg = styled.img`
  width: 18px;
  height: 18px;
`;
const AchieveText = styled.span`
  color: #979797;
  text-align: center;
  font-family: "YiSunShinDotumB";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.408px;
`;
