import React, { useState } from "react";
import styled from "styled-components";
import SignupHeader from "../component/signup/SignupHeader";
import SignupMain from "../component/signup/SignupMain";

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
