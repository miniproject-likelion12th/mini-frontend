import React, { useState } from "react";
import styled from "styled-components";

const ViewAchiveModal = ({ title, id, onAchieve }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAchieve = () => {
    onAchieve(id);
  };

  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalBox>
        <Text>
          축하해요!🎉 <br />
          <span style={{ color: "#6fbc89" }}>{title}</span>을 모두
          <br />
          달성한 것이 맞다면 확인을 눌러주세요
        </Text>
        <ButtonContainer>
          <SubmitBtn onClick={handleAchieve}>확인</SubmitBtn>
          <CancleBtn onClick={handleClose}>취소</CancleBtn>
        </ButtonContainer>
      </ModalBox>
    </ModalBackground>
  );
};

export default ViewAchiveModal;

const ModalBackground = styled.div`
  position: fixed; /* 화면에 고정 */
  top: 0;
  left: 0;
  z-index: 1000; /* 모달을 화면 위에 표시 */
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.36); /* 배경 어두운 색 */
  backdrop-filter: blur(4px); /* 배경 흐림 효과 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ModalBox = styled.div`
  margin-top: 0;
  width: 339px;
  height: 187px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #6fbc89;
  background: #fbfefd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 모달 상자 그림자 */
  text-align: center; /* 텍스트 중앙 정렬 */

  animation: slideUp 0.5s ease-out; /* 애니메이션 추가 */

  @keyframes slideUp {
    from {
      transform: translateY(200px); /* 아래에서 시작 */
      opacity: 0; /* 투명하게 시작 */
    }
    to {
      transform: translateY(0); /* 원래 위치로 이동 */
      opacity: 1; /* 완전히 보이도록 */
    }
  }
`;

const Text = styled.div`
  margin-top: 30px;
  color: #8a8888;
  text-align: center;
  font-family: "YiSunShinDotumM";
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
  display: flex;
  margin: 32px auto 0;
  gap: 23px;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;

const SubmitBtn = styled.div`
  width: 137px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #6fbc89;
  background: #fbfefd;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: #6fbc89;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "YiSunShinDotumB";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;
const CancleBtn = styled.div`
  width: 137px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #6fbc89;
  background: #6fbc89;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-family: "YiSunShinDotumB";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;
