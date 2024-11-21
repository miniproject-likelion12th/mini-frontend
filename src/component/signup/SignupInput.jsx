import React from "react";
import styled from "styled-components";

const SignupInput = ({
  inputTitle,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <InputContainer>
      <InputTextContiner>
        <InputTitle>{inputTitle}</InputTitle>
        <InputText>* 필수 입력 항목입니다.</InputText>
      </InputTextContiner>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default SignupInput;

const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  align-self: stretch;
`;

const InputTextContiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;

const InputTitle = styled.div`
  color: #4a4a4a;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputText = styled.div`
  color: #bababa;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 3px;
`;
const Input = styled.input`
  margin-bottom: 0;
  width: 270px;
  border-radius: 15px;
  border: 0.5px solid #6fbc89;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  color: #4a4a4a;
  font-family: "YiSunShinDotumL";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 15px;
  outline: none;
  &::placeholder {
    color: #adadad;
  }
`;
