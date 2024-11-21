import React, { useState } from "react";
import styled from "styled-components";
import SignupHeader from "./signup_component/SignupHeader";
import SignupMain from "./signup_component/SignupMain";

const SignUp = () => {
  return (
    <SignupPage>
      <SignupHeader />
      <SignupMain />
    </SignupPage>
  );
};

export default SignUp;

const SignupPage = styled.div`
  width: 393px;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
