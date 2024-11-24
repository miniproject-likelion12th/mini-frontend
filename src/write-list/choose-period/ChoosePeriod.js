import React, { useState } from "react";
import QuestionTitle from "../style-component/QuestionTitle";
import styled from "styled-components";
import BottomButton from "../style-component/BottomButton";
import { Container } from "../style-component/Wrapper";
import PeriodButton from "./component/PeriodButton";
import { useNavigate } from "react-router";

const ChoosePeriod = () => {
  const [periodClicked, setPeriodClicked] = useState(null);
  const navigate = useNavigate();

  return (
    <Container>
      <Hello>
        <QuestionTitle text="안녕하세요, 김사자님!" />
        <Logo />
      </Hello>
      <Ask>
        <QuestionTitle text="오늘은 어떤 버킷리스트를 작성할까요?" />
      </Ask>
      <PeriodButton clicked={periodClicked} setClicked={setPeriodClicked} />
      <BottomButton
        text="작성 시작하기"
        display={!!periodClicked}
        onClick={() => navigate("/WriteDetail")}
      />
    </Container>
  );
};

export default ChoosePeriod;

const Hello = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;

const Ask = styled.div`
  width: 100%;
`;

const Logo = styled.img.attrs({
  src: "banner/irume.png",
})`
  width: 20px;
  height: 22px;
`;
