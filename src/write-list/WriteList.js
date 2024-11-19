import React from "react";
import CategoryList from "./component/CategoryList";
import QuestionTitle from "./component/QuestionTitle";
import styled from "styled-components";
import BottomButton from "./component/BottomButton";

const WriteList = () => {
  return (
    <Wrapper>
      <Group>
        <QuestionTitle text="안녕하세요, 김사자님!" />
        <Logo />
      </Group>
      <QuestionTitle text="오늘은 어떤 버킷리스트를 작성할까요?" />
      <CategoryList />
      <BottomButton text="작성 시작하기" />
    </Wrapper>
  );
};

export default WriteList;

const Wrapper = styled.div`
  width: 393px;
  min-height: 852px;
  display: flex;
  flex-direction: column;
  background-color: #fbfefd;
`;

const Group = styled.div`
  display: flex;
  gap: 4px;
`;

const Logo = styled.img.attrs({
  src: "irume.png",
})`
  width: 20px;
  height: 22px;
`;
