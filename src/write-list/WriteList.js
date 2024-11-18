import React from "react";
import CategoryList from "./component/CategoryList";
import QuestionTitle from "./component/QuestionTitle";
import styled from "styled-components";

const WriteList = () => {
  return (
    <div>
      <Group>
        <QuestionTitle text="안녕하세요, 김사자님!" />
        <Logo />
      </Group>
      <QuestionTitle text="오늘은 어떤 버킷리스트를 작성할까요?" />
      <CategoryList />
    </div>
  );
};

export default WriteList;

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
