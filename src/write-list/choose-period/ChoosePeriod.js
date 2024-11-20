import React, { useState } from "react";
import QuestionTitle from "./component/QuestionTitle";
import styled from "styled-components";
import BottomButton from "../style-component/BottomButton";
import Banner from "../style-component/Banner";
import MenuBanner from "../style-component/MenuBanner";
import { Container, Wrapper } from "../style-component/Wrapper";
import PeriodButton from "./component/PeriodButton";

const ChoosePeriod = () => {
  const [periodClicked, setPeriodClicked] = useState(null);

  return (
    <Wrapper>
      <Banner />
      <MenuBanner />
      <Container>
        <Group>
          <QuestionTitle text="안녕하세요, 김사자님!" />
          <Logo />
        </Group>
        <Group>
          <QuestionTitle text="오늘은 어떤 버킷리스트를 작성할까요?" />
        </Group>
        <PeriodButton clicked={periodClicked} setClicked={setPeriodClicked} />
        <BottomButton text="작성 시작하기" display={!!periodClicked} />
      </Container>
    </Wrapper>
  );
};

export default ChoosePeriod;

const Group = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;

const Logo = styled.img.attrs({
  src: "banner/irume.png",
})`
  width: 20px;
  height: 22px;
`;
