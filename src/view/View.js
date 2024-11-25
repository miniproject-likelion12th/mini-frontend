import React, { useState } from "react";
import * as S from "./styled";
import Banner from "./component/Banner";
import MenuBanner from "./component/MenuBanner";
import CategoryBtn from "./component/CategoryBtn";
import PeriodBtn from "./component/PeriodBtn";
import AllIcon from "../assets/img/View_Category_Icon/View_all.svg";
import TravelIcon from "../assets/img/View_Category_Icon/View_travel.svg";
import HobbyIcon from "../assets/img/View_Category_Icon/View_hobby_culture.svg";
import HealthIcon from "../assets/img/View_Category_Icon/View_health_exercise.svg";
import SpendingIcon from "../assets/img/View_Category_Icon/View_spending_saving_donating.svg";
import SelfIcon from "../assets/img/View_Category_Icon/View_self_development.svg";
import OthersIcon from "../assets/img/View_Category_Icon/View_others.svg";
import CareerIcon from "../assets/img/View_Category_Icon/View_career.svg";
import FamilyIcon from "../assets/img/View_Category_Icon/View_family_friends.svg";
import AllWhiteIcon from "../assets/img/View_Category_Icon/All_white.svg";
import TravelWhiteIcon from "../assets/img/View_Category_Icon/Travel_white.svg";
import HobbyWhiteIcon from "../assets/img/View_Category_Icon/Hobby_white.svg";
import HealthWhiteIcon from "../assets/img/View_Category_Icon/Health_white.svg";
import FamilyWhiteIcon from "../assets/img/View_Category_Icon/Family_white.svg";
import SpendingWhiteIcon from "../assets/img/View_Category_Icon/Spending_white.svg";
import SelfWhiteIcon from "../assets/img/View_Category_Icon/Self_white.svg";
import CarrerWhiteIcon from "../assets/img/View_Category_Icon/Career_white.svg";
import OthersWhiteIcon from "../assets/img/View_Category_Icon/Others_white.svg";

const View = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoverIndex, setHoverIndex] = useState(null); // hover 상태 관리
  const [selectedPeriod, setSelectedPeriod] = useState("전체");

  const periods = ["전체", "단기", "장기", "달성"];
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
  const whiteicons = [
    AllWhiteIcon,
    HobbyWhiteIcon,
    TravelWhiteIcon,
    SelfWhiteIcon,
    HealthWhiteIcon,
    FamilyWhiteIcon,
    SpendingWhiteIcon,
    CarrerWhiteIcon,
    OthersWhiteIcon,
  ];

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`);
  };

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
    <S.Wrapper>
      <Banner />
      <MenuBanner />
      <S.Container>
        <S.CategoryContainer>
          <S.Categories>
            {texts.map((text, index) => (
              <CategoryBtn
                key={engText[index]}
                text={text}
                icon={icons[index]}
                whiteIcon={whiteicons[index]}
                isSelected={selectedCategory === engText[index]}
                onClick={() => {
                  onCategorySelect(engText[index]);
                  console.log(engText[index]);
                }}
                onHover={() => setHoverIndex(index)}
                onLeave={() => setHoverIndex(null)}
                isHovered={hoverIndex === index}
              />
            ))}
          </S.Categories>
        </S.CategoryContainer>
        <S.PeriodContainer>
          {periods.map((period) => (
            <PeriodBtn
              key={period}
              period={period}
              isSelected={selectedPeriod === period}
              onClick={() => {
                setSelectedPeriod(period);
                console.log(`Selected period: ${period}`);
              }}
            />
          ))}
        </S.PeriodContainer>
        {/* <S.Card
          title={title}
          category={category}
          motive={motive}
          period={period}
          is_achieved={is_achieved}
          goals={goals}
        /> */}
      </S.Container>
    </S.Wrapper>
  );
};

export default View;
