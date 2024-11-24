import React from "react";
import spinner from "../../assets/img/Spinner.gif";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <Background>
        <img src={spinner} alt="로딩중" width="50px" />
        <LoadingText>로딩중</LoadingText>
      </Background>
    </>
  );
};

export default Loading;

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: -150px;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
`;
