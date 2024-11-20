import React, { useState } from "react";
import * as S from "./styled";
import SignupInput from "./SignupInput";
import Button from "../common/Button";

const SignupMain = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   const isUsername = Boolean(formValue.username);
  //   const isPassword = Boolean(formValue.password);

  //   const handleLogin = () => {
  //     if (!isUsername) {
  //       return alert("이메일을 입력해주세요.");
  //     } else if (!isPassword) {
  //       return alert("비밀번호를 입력해주세요.");
  //     } else {
  //       axios
  //         .post(`${baseURL}/login/`, formValue)
  //         .then((response) => {
  //           console.log(response);
  //           alert("로그인 성공!");
  //           localStorage.clear();
  //           const userInfo = response.data;
  //           localStorage.setItem("access", userInfo.access);
  //           localStorage.setItem("refresh", userInfo.refresh);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   };
  return (
    <>
      <S.SignupMain>
        <S.Text>
          안녕하세요 {":)"} <br />
          사용자님에 대해 알려주세요.
        </S.Text>
        <S.SignupInputContainer>
          <SignupInput
            inputTitle="이름"
            id="username"
            name="username"
            value={formValue.username}
            onChange={handleChange}
            type="username"
            placeholder="김사자"
          />
          <SignupInput
            id="email"
            name="email"
            inputTitle="이메일"
            value={formValue.email}
            onChange={handleChange}
            type="email"
            placeholder="likelion@example.com"
          />
          <SignupInput
            id="password"
            name="password"
            inputTitle="비밀번호"
            value={formValue.password}
            onChange={handleChange}
            type="password"
            placeholder="영문/숫자/특수문자 혼합, 8~12자"
          />
          <SignupInput
            id="password"
            name="password"
            inputTitle="비밀번호 확인"
            value={formValue.password}
            onChange={handleChange}
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
          />
        </S.SignupInputContainer>
        <Button text="완료" />
      </S.SignupMain>
    </>
  );
};

export default SignupMain;
