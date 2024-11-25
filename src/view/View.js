import React, { useState } from "react";
import * as S from "./styled";
import Banner from "./component/Banner";
import MenuBanner from "./component/MenuBanner";
import CategoryBtn from "./component/CategoryBtn";
import PeriodBtn from "./component/PeriodBtn";
import Card from "./component/Card";

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

  // 스와이프 이벤트 처리
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 카드 인덱스
  const [startX, setStartX] = useState(null); // 터치 시작 위치 저장
  const [isSwiping, setIsSwiping] = useState(false); // 스와이프 중 여부

  // map에 필요한 배열
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
  const data = [
    {
      id: 1,
      title: "건강한 삶",
      category: "health_exercise",
      motive: "건강을 유지하고 체력을 기르기",
      period: "short_term",
      duration_years: null,
      is_achieved: false,
      goals: [
        {
          id: 1,
          year: null,
          month: 1,
          content: "헬스장 3개월 등록하기",
          is_done: false,
        },
        {
          id: 2,
          year: null,
          month: 4,
          content: "유산소 운동 30분 하기",
          is_done: false,
        },
      ],
    },
    {
      id: 2,
      title: "도쿄 여행",
      category: "travel",
      motive: "가서 맛있는 라멘 먹고싶다!!!!",
      period: "short_term",
      duration_years: 3,
      is_achieved: false,
      goals: [
        {
          id: 3,
          year: 1,
          month: null,
          content: "도쿄 맛집 정보 조사하기",
          is_done: false,
        },
        {
          id: 4,
          year: 3,
          month: null,
          content: "도쿄로 출발하기",
          is_done: false,
        },
      ],
    },
  ];

  // 모바일에서 스와이프
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const touchX = e.touches[0].clientX;
    const diff = touchX - startX;

    // 스와이프 방향 결정
    if (diff > 50) {
      handlePrev();
      setIsSwiping(false);
    } else if (diff < -50) {
      handleNext();
      setIsSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 노트북에서 (마우스) 스와이프
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsSwiping(true);
  };

  const handleMouseMove = (e) => {
    if (!isSwiping) return;
    const diff = e.clientX - startX;

    if (diff > 50) {
      handlePrev();
      setIsSwiping(false);
    } else if (diff < -50) {
      handleNext();
      setIsSwiping(false);
    }
  };

  const handleMouseUp = () => {
    setIsSwiping(false);
  };

  const currentCard = data[currentIndex];

  return (
    <S.Wrapper
      // 모바일
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // 마우스
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
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
        <S.CardContainer>
          {currentIndex > 0 && (
            <S.LeftArrow onClick={handlePrev}>
              <span>{"<"}</span>
            </S.LeftArrow>
          )}
          <Card
            title={currentCard.title}
            category={currentCard.category}
            motive={currentCard.motive}
            period={currentCard.period}
            is_achieved={currentCard.is_achieved}
            goals={currentCard.goals}
          />
          {currentIndex < data.length - 1 && (
            <S.RightArrow onClick={handleNext}>
              <span>{">"}</span>
            </S.RightArrow>
          )}
        </S.CardContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default View;
