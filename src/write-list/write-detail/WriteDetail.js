import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Container } from "../style-component/Wrapper";
import BottomButton from "../style-component/BottomButton";
import { useLocation, useNavigate } from "react-router";
import CategoryList from "./component/CategoryList";
import QuestionTitle from "../style-component/QuestionTitle";
import NoticeText from "../style-component/NoticeText";
import WarningText from "../style-component/WarningText";
import { shortTerm, translateEng } from "../definition/definition";

const WriteDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bucketList, setBucketList] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [reason, setReason] = useState("");
  const [showWaring, setShowWaring] = useState(false);
  const period = location.state.period;

  const moveToNext = () => {
    if (!bucketList || !selectedCategory || !reason) {
      setShowWaring(true);
      return;
    }

    const request = {
      title: bucketList,
      category: translateEng(selectedCategory),
      motive: reason,
      period: period,
    };
    const url = period === shortTerm ? "/WriteGoal" : "/WriteYear";

    navigate(url, { state: { request } });
  };

  return (
    <>
      <NewContainer>
        <QnA>
          <Ask>
            <QuestionTitle text="버킷리스트를 작성해주세요." />
            <NoticeText />
          </Ask>
          <Irume>
            <img src="banner/irume-input-deco.svg" />
          </Irume>
          <Input
            type="text"
            value={bucketList}
            placeholder="버킷리스트를 작성해주세요."
            onChange={(e) => setBucketList(e.target.value)}
          />
        </QnA>
        <QnA>
          <Ask>
            <QuestionTitle text="버킷리스트의 카테고리를 정해주세요." />
            <NoticeText />
          </Ask>
          <CategoryList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </QnA>
        <QnA>
          <Ask>
            <QuestionTitle text="버킷리스트가 된 계기는 무엇인가요?" />
          </Ask>
          <Irume>
            <img src="banner/irume-input-deco.svg" />
          </Irume>
          <TextArea
            value={reason}
            placeholder="버킷리스트가 된 계기를 작성해주세요."
            onChange={(e) => setReason(e.target.value)}
          />
        </QnA>
      </NewContainer>
      <WarningText
        text="필수 입력 항목을 모두 작성해주세요."
        display={showWaring}
      />
      <BottomButton text="다음" onClick={moveToNext} />
    </>
  );
};

export default WriteDetail;

const NewContainer = styled(Container)`
  gap: 45px;
  padding-bottom: 0px;
`;

const QnA = styled.div`
  width: 100%;
`;

export const Ask = styled.div`
  width: 100%;
  display: flex;
  justify-content: baseline;
  align-items: end;
  gap: 4px;
`;

const Irume = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 5px;
  margin-bottom: -1px;
  img {
    width: 42px;
    height: 14px;
  }
`;

const sharedStyle = css`
  border-radius: 5px;
  border: 0.5px solid #6fbc89;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  color: #4a4a4a;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "YiSunShinDotumM";
  &::placeholder {
    color: #adadad;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &:focus {
    border-color: #6fbc89;
    outline: 0;
  }
`;

const Input = styled.input`
  ${sharedStyle}
  width: calc(100% - 18px);
  height: 44px;
  padding: 0px 9px;
`;

const TextArea = styled.textarea`
  ${sharedStyle}
  width: calc(100% - 18px);
  height: 128px;
  resize: none;
  padding: 15px 9px;
`;
