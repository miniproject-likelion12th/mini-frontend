import React, { useState } from "react";
import * as S from "./styled";
import loginLogo from "../assets/img/Login_logo.svg";
import { useNavigate } from "react-router";
import Button from "../component/common/Button";
import ErrorMessage from "../component/common/ErrorMessage";
import deleteImg from "../assets/img/Login_delete.svg";
import eye from "../assets/img/Login_eye_open.png";
import eye_close from "../assets/img/Login_eye_close.svg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const isLogin = Boolean(email && password);

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };

    // try {
    //   setLoading(true);
    //   const response = await apiCall("users/login/", "post", data, null);
    //   const token = response.data.token;

    //   if (token) {
    //     Cookies.set("access_token", token, {
    //       path: "/",
    //       secure: true,
    //       sameSite: "None",
    //     });
    //     setLoading(false);
    //     navigate("/us");
    //   }
    //   if (response.data.errors) {
    //     setLoading(false);
    //     alert(response.data.message + "아이디 혹은 비밀번호를 확인해주세요!");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const goToSignup = () => navigate("/signUp");

  return (
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
          text="이메일 또는 비밀번호를 입력해주세요."
          style={{
            marginTop: "15px",
            opacity: isLogin ? 0 : 1,
          }}
          // 연동하면서 errorMessage 바꾸기
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
