import React, { useState } from "react";
import CategoryList from "./component/CategoryList";
import QuestionTitle from "./component/QuestionTitle";
import styled from "styled-components";
import BottomButton from "./component/BottomButton";
import Banner from "./component/Banner";
import MenuBanner from "./component/MenuBanner";
import ChoosePeriod from "./component/ChoosePeriod";

const WriteList = () => {
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
        <QuestionTitle text="오늘은 어떤 버킷리스트를 작성할까요?" />
        <ChoosePeriod clicked={periodClicked} setClicked={setPeriodClicked} />
        <BottomButton text="작성 시작하기" display={!!periodClicked} />
      </Container>
    </Wrapper>
  );
};

export default WriteList;

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

const Group = styled.div`
  display: flex;
  gap: 4px;
`;

const Logo = styled.img.attrs({
  src: "banner/irume.png",
})`
  width: 20px;
  height: 22px;
`;
