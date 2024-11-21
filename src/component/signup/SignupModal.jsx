import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import SignupModal_logo from "../../assets/img/SignupModal_logo.svg";

const SignupModal = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <ModalBackground>
      <ModalBox>
        <Logo src={SignupModal_logo} />
        <MainText>회원가입이 완료되었습니다.</MainText>
        <SubText>김사자님, 환영합니다!</SubText>
        <ButtonContainer>
          <Button text="이루미 시작하기" onClick={goToLogin} />
        </ButtonContainer>
      </ModalBox>
    </ModalBackground>
  );
};

export default SignupModal;

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
  margin-top: 200px;
  height: 70%;
  width: 100vw;
  padding: 20px;
  background-color: white; /* 모달 상자 배경 */
  border-radius: 20px; /* 테두리 둥글게 */
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
const Logo = styled.img`
  margin-top: 50px;
`;

const MainText = styled.div`
  margin-top: 30px;
  color: #4a4a4a;
  text-align: center;
  font-family: "YiSunShinDotumL";
  font-size: 27px;
  font-style: normal;
  font-weight: 800;
  line-height: 22px; /* 81.481% */
  letter-spacing: -2px;
`;

const SubText = styled.div`
  margin-top: 30px;
`;

const ButtonContainer = styled.div`
  margin-top: 10%;
`;
