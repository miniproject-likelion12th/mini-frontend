import React from "react";
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

const icons = [
  AllIcon,
  HobbyIcon,
  TravelIcon,
  SelfIcon,
  HealthIcon,
  FamilyIcon,
  SpendingIcon,
  CareerIcon,
  OthersIcon,
];
const texts = [
  "전체",
  "취미/문화",
  "여행",
  "자기계발",
  "건강/운동",
  "가족/친구",
  "소비/저축/기부",
  "커리어",
  "기타",
];
const engText = [
  "all",
  "hobby_culture",
  "travel",
  "self_development",
  "health_exercise",
  "family_friends",
  "spending_saving_donating",
  "career",
  "others",
];

const ViewCategoryBtn = ({ selectedCategory, onCategorySelect }) => {
  return (
    <Container>
      <BlurBox_Left />
      <CategoryContainer>
        {texts.map((text, index) => (
          <CategoryButton
            key={engText[index]}
            bgColor={
              selectedCategory === engText[index] ? "#6FBC89" : "#ffffff"
            }
            color={selectedCategory === engText[index] ? "#ffffff" : "#7a7a7a"}
            onClick={() => onCategorySelect(engText[index])}
          >
            <CategoryIcon
              src={icons[index]}
              alt={`${text} icon`}
              selected={selectedCategory === engText[index]}
            />
            <CategoryText>{text}</CategoryText>
          </CategoryButton>
        ))}
      </CategoryContainer>
      <BlurBox_Right />
    </Container>
  );
};

export default ViewCategoryBtn;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 393px;

  // 스크롤바 제거 css 모음
  scrollbar-width: none; /* (Firefox) */
  -ms-overflow-style: none; /* (IE 10+) */
  &::-webkit-scrollbar {
    display: none; /* (Chrome, Safari) */
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;
  width: 100%;
  padding: 10px 0;

  // 스크롤바 제거 css 모음
  scrollbar-width: none; /* (Firefox) */
  -ms-overflow-style: none; /* (IE 10+) */
  &::-webkit-scrollbar {
    display: none; /* (Chrome, Safari) */
  }
`;

const BlurBox_Left = styled.div`
  position: absolute;
  top: 0;
  left: -20px;
  width: 35px;
  height: 100%;
  background: #fff;
  filter: blur(2.5px);
  z-index: 10;
`;

const BlurBox_Right = styled.div`
  position: absolute;
  top: 0;
  right: -20px;
  width: 35px;
  height: 100%;
  background: #fff;
  filter: blur(2.5px);
  z-index: 10;
`;

const CategoryButton = styled.button`
  display: flex;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid #6fbc89;
  border-radius: 30px;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: #6fbc89;
    color: #ffffff;
  }
`;

const CategoryIcon = styled.img`
  width: 22px;
  height: 22px;
  filter: ${(props) =>
    props.selected
      ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(103%) contrast(103%)"
      : "none"};

  &:hover {
    filter: "invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(103%) contrast(103%)";
  }
`;

const CategoryText = styled.span`
  text-align: center;
  font-family: "YiSunShinDotumB";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
`;
