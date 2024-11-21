import React, { useState, useRef } from "react";
import * as S from "./styled";
import SignupInput from "./SignupInput";
import Button from "../common/Button";
import ErrorMessage from "../common/ErrorMessage";

const SignupMain = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [isDuplicate, setIsDuplicate] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const [errorState, setErrorState] = useState({
    username: false,
    email: false,
    emailInvalid: false,
    password: false,
    passwordMatch: false,
  });

  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 유효성 검사 정규식

    const errors = {
      username: !username,
      email: !email,
      emailInvalid: email && !emailRegex.test(email), // 이메일이 입력되어 있지만 형식에 맞지 않는 경우
      password: !password,
      passwordMatch: password !== password2,
    };

    setErrorState(errors);

    // 모든 필드가 올바르게 입력되었는지 확인
    const hasErrors = Object.values(errors).some((err) => err);
    if (!hasErrors) {
      // 서버로 전송 로직 추가
      console.log("회원가입 성공:", { username, email, password, password2 });
    }

    // const data = {
    //     username: username,
    //     email: email,
    //     password: password,
    //     password2: password2,
    //   };

    //     const Register = async () => {
    //     if (formRef.current.checkValidity()) {
    //       try {
    //         setLoading(true);
    //         const response = await apiCall("users/register/", "POST", data, null);
    //         if (response.data.token) {
    //           setLoading(false);
    //           navigate("/");
    //         } else if (response.data.errors.password) {
    //           setLoading(false);
    //           alert(response.data.errors.password[0]);
    //         } else if (response.data.errors.username) {
    //           setLoading(false);
    //           setIsDuplicate("red");
    //         } else if (response.data.errors.userid) {
    //           console.log("실행됨?");
    //           setLoading(false);
    //           setIsDuplicate("red");
    //         }
    //       } catch (error) {
    //         console.log("에러발생s", error);
    //       }
    //     }
  };

  return (
    <>
      <S.SignupMain>
        <S.Text>
          안녕하세요 {":)"} <br />
          사용자님에 대해 알려주세요.
        </S.Text>
        <S.SignupInputContainer>
          {/* username */}
          <SignupInput
            inputTitle="이름"
            placeholder="김사자"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.ErrorContainer>
            <ErrorMessage
              text="이름을 입력해주세요."
              style={{
                marginTop: "15px",
                opacity: errorState.username ? 1 : 0,
              }}
            />
          </S.ErrorContainer>

          {/* email */}
          <SignupInput
            inputTitle="이메일"
            placeholder="likelion@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.ErrorContainer>
            {errorState.email && (
              <ErrorMessage
                text="이메일을 입력해주세요."
                style={{
                  marginTop: "15px",
                  opacity: 1,
                }}
              />
            )}
            {!errorState.email && errorState.emailInvalid && (
              <ErrorMessage
                text="이메일이 형식에 맞지 않습니다."
                style={{
                  marginTop: "15px",
                  opacity: 1,
                }}
              />
            )}
            {!errorState.email && !errorState.emailInvalid && (
              <ErrorMessage
                text="빈공간확보용"
                style={{
                  marginTop: "15px",
                  opacity: 0,
                }}
              />
            )}
          </S.ErrorContainer>

          {/* password */}
          <SignupInput
            inputTitle="비밀번호"
            placeholder="영문/숫자/특수문자 혼합, 8~12자"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.ErrorContainer>
            <ErrorMessage
              text="비밀번호를 입력해주세요."
              style={{
                marginTop: "15px",
                opacity: errorState.password ? 1 : 0,
              }}
            />
          </S.ErrorContainer>

          {/* password2 */}
          <SignupInput
            inputTitle="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <S.ErrorContainer>
            <ErrorMessage
              text="비밀번호가 일치하지 않습니다."
              style={{
                marginTop: "15px",
                opacity: errorState.passwordMatch ? 1 : 0,
              }}
            />
          </S.ErrorContainer>
        </S.SignupInputContainer>
        <S.SinputButtonContainer>
          <Button text="완료" onClick={handleSignup} />
        </S.SinputButtonContainer>
      </S.SignupMain>
    </>
  );
};
export default SignupMain;
