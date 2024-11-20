import React from "react";
import styled from "styled-components";
import BackImage from "../../assets/img/BackImg.svg";
import { useNavigate } from "react-router";

const SignupHeader = () => {
  const navigate = useNavigate();

  const backFunc = () => {
    navigate("/login");
  };

  return (
    <>
      <Header>
        <BackImg src={BackImage} onClick={backFunc} />
        <Text>회원가입</Text>
      </Header>
      <HeaderBackground />
    </>
  );
};

export default SignupHeader;

const Header = styled.div`
  width: 100%;
  height: 63px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 110% */
  letter-spacing: -0.408px;
  display: flex;
  align-items: center;
`;
const BackImg = styled.img`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  cursor: pointer;
  margin-left: 10px;
`;
const Text = styled.div`
  margin-left: 30%;
`;

const HeaderBackground = styled.div`
  width: 393px;
  height: 1px;
  background: rgba(138, 136, 136, 0.38);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
