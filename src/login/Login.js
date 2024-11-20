import React, { useState } from "react";
import * as S from "./styled";
import loginLogo from "../assets/img/Login_logo.svg";
import { useNavigate } from "react-router";
import Button from "../component/common/Button";
import ErrorMessage from "../component/common/ErrorMessage";

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isEmail = Boolean(formValue.email);
  const isPassword = Boolean(formValue.password);

  const isLogin = isEmail && isPassword;

  const handleLogin = () => {
    if (!formValue.email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!formValue.password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    console.log("Login successful with:", formValue);
  };

  const goToSignup = () => navigate("/signUp");

  return (
    <S.LoginPage>
      <S.LogoContanier>
        <S.IrumeLogoImg src={loginLogo} alt="로그인 로고" />
        <S.LogoMessage>나라는 꿈을 이뤄가는 공간</S.LogoMessage>
      </S.LogoContanier>

      <S.InputBox>
        <S.Email
          placeholder="이메일"
          id="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          type="email"
        />
        <br />
        <S.Password
          placeholder="비밀번호"
          id="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
          type="password"
        />
        <ErrorMessage
          text="이메일 또는 비밀번호를 입력해주세요."
          style={{
            marginTop: "10px",
            opacity: isLogin ? 0 : 1,
          }}
        />
      </S.InputBox>

      <Button
        text="로그인"
        bgColor="#6FBC89"
        color="#fbfefd"
        onClick={handleLogin}
        disabled={!isLogin}
        style={{ marginTop: "10px" }}
      />

      <S.LoginCaption>
        아직 회원이 아니신가요?
        <S.LoginBold onClick={goToSignup}>회원가입하기</S.LoginBold>
      </S.LoginCaption>
    </S.LoginPage>
  );
};

export default Login;
