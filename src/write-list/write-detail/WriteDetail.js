import React from "react";
import styled from "styled-components";
import Banner from "../style-component/Banner";
import MenuBanner from "../style-component/MenuBanner";
import { Container, Wrapper } from "../style-component/Wrapper";
import BottomButton from "../style-component/BottomButton";
import { useNavigate } from "react-router";
import CategoryList from "./component/CategoryList";
import QuestionTitle from "../style-component/QuestionTitle";
import NoticeText from "../style-component/NoticeText";

const WriteDetail = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Banner />
      <MenuBanner />
      <NewContainer>
        <QnA>
          <Ask>
            <QuestionTitle text="버킷리스트를 작성해주세요." />
            <NoticeText />
          </Ask>
          <Irume>
            <img src="banner/irume-input-deco.svg" />
          </Irume>
          <Input type="text" />
        </QnA>
        <QnA>
          <Ask>
            <QuestionTitle text="버킷리스트의 카테고리를 정해주세요." />
          </Ask>
          <CategoryList />
        </QnA>
        <QnA>
          <Ask>
            <QuestionTitle text="버킷리스트가 된 계기는 무엇인가요?" />
          </Ask>
        </QnA>
        <BottomButton
          text="작성 시작하기"
          display={true}
          onClick={() => navigate("/")}
        />
      </NewContainer>
    </Wrapper>
  );
};

export default WriteDetail;

const NewContainer = styled(Container)`
  gap: 45px;
`;

const QnA = styled.div`
  width: 100%;
`;

const Ask = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 4px;
`;

const Irume = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0;
  border-radius: 5px;
  border: 0.5px solid #6fbc89;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  color: #4a4a4a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-inline-start: 9px;
  font-family: "YiSunShinDotumM";
  &:focus {
    border-color: #6fbc89;
    outline: 0;
  }
`;
