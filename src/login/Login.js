import React, { useState } from "react";
import * as S from "./styled";
import loginLogo from "../assets/img/Login_logo.svg";
import { useNavigate } from "react-router";
import Button from "../component/common/Button";
import ErrorMessage from "../component/common/ErrorMessage";
import deleteImg from "../assets/img/Login_delete.svg";
import eye from "../assets/img/Login_eye_open.svg";
import eye_close from "../assets/img/Login_eye_close.svg";
import Cookies from "js-cookie";
import apiCall from "../api/Api";
import Loading from "../component/common/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const isLogin = Boolean(email && password);

  const handleLogin = async () => {
    if (!isLogin) {
      setErrorMessage("이메일 또는 비밀번호를 입력해주세요.");
      return;
    }

    const loginData = {
      email: email,
      password: password,
    };

    try {
      setLoading(true);
      // Step 1: 로그인 요청
      const loginResponse = await apiCall(
        "users/login/",
        "post",
        loginData,
        null
      );
      if (loginResponse.data.message !== "로그인 성공") {
        setErrorMessage(
          "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."
        );
        setLoading(false);
        return;
      }

      // Step 2: 토큰 요청
      const tokenResponse = await apiCall(
        "users/token/",
        "post",
        loginData,
        null
      );
      const accessToken = tokenResponse.data.access;

      if (accessToken) {
        // Step 3: 토큰 저장
        Cookies.set("access_token", accessToken, {
          path: "/",
          secure: true,
          sameSite: "None",
        });

        setLoading(false);
        navigate("/ChoosePeriod"); // 로그인 성공 후 이동
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Login error:", error);
    }
  };

  const goToSignup = () => navigate("/signUp");

  return (
    <>
      <div>{loading ? <Loading /> : null}</div>
      <S.LoginPage>
        <S.LogoContanier>
          <S.IrumeLogoImg src={loginLogo} alt="로그인 로고" />
          <S.LogoMessage>나라는 꿈을 이뤄가는 공간</S.LogoMessage>
        </S.LogoContanier>

        <S.InputBox>
          <S.EmailBox>
            <S.Email
              placeholder="이메일"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <S.DeleteContainer_Login>
              <S.DeleteImg
                src={deleteImg}
                onClick={() => setEmail("")}
                style={{
                  opacity: email ? 1 : 0,
                }}
              />
            </S.DeleteContainer_Login>
          </S.EmailBox>
          <br />
          <S.PasswordBox>
            <S.Password
              placeholder="비밀번호"
              type={passwordVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <S.EyeContainer>
              <S.EyeImg
                src={passwordVisible ? eye : eye_close}
                onClick={togglePasswordVisibility}
                style={{
                  opacity: password ? 1 : 0,
                }}
              />
            </S.EyeContainer>
            <S.DeleteContainer_Password>
              <S.DeleteImg
                src={deleteImg}
                onClick={() => setPassword("")}
                style={{
                  opacity: password ? 1 : 0,
                }}
              />
            </S.DeleteContainer_Password>
          </S.PasswordBox>
          <ErrorMessage
            text={errorMessage}
            style={{
              marginTop: "15px",
              opacity: isLogin && !errorMessage ? 0 : 1,
            }}
          />
        </S.InputBox>

        <Button
          text="로그인"
          bgColor="#6FBC89"
          color="#fbfefd"
          onClick={handleLogin}
          style={{ marginTop: "10px" }}
        />

        <S.LoginCaption>
          아직 회원이 아니신가요?
          <S.LoginBold onClick={goToSignup}>회원가입하기</S.LoginBold>
        </S.LoginCaption>
      </S.LoginPage>
    </>
  );
};

export default Login;
