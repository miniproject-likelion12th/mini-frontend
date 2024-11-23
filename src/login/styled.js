import styled from "styled-components";

// LoginPage
export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LogoContanier = styled.div`
  margin-top: calc(50% - 70px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const IrumeLogoImg = styled.img`
  width: 214px;
  height: 186px;
`;
export const LogoMessage = styled.div`
  margin-top: 20px;
  color: #4a4a4a;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputBox = styled.div`
  background: #fff;
  outline: none;
  color: #979797;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const EmailBox = styled.div`
  display: flex;
`;
export const Email = styled.input`
  width: 247px;
  height: 44px;
  border: 0.5px solid #6fbc89;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 0 0;
  outline: none;
  padding: 0 12px;
  font-family: "YiSunShinDotumM";
`;

export const DeleteContainer_Login = styled.div`
  margin-top: 15px;
  margin-left: -25px;
`;
export const DeleteImg = styled.img`
  pointer-events: auto;
  cursor: pointer;
`;

export const PasswordBox = styled.div`
  /* display: flex; */
  margin-top: -15px;
`;
export const Password = styled.input`
  width: 247px;
  height: 44px;
  border-radius: 0 0 10px 10px;
  border-top: none;
  border: 0.5px solid #6fbc89;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  padding: 0 12px;
  font-family: "YiSunShinDotumM";
`;
export const EyeContainer = styled.div`
  position: relative;
  margin-left: 223px;
  transform: translateY(-150%);
  width: 15px;
`;
export const EyeImg = styled.img`
  cursor: pointer;
`;
export const DeleteContainer_Password = styled.div`
  margin-top: -45px;
  margin-left: 247px;
`;
export const LoginCaption = styled.div`
  margin-top: 15px;
  text-align: center;
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const GrayText = styled.div``;
export const LoginBold = styled.span`
  margin-left: 10px;
  color: #4a4a4a;
  font-family: "YiSunShinDotumB";
  font-weight: 700;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  cursor: pointer;
`;
