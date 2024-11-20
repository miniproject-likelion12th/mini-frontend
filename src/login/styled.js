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
export const Password = styled.input`
  width: 247px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 0 0 10px 10px;
  border-top: none;
  border: 0.5px solid #6fbc89;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  padding: 0 12px;
  font-family: "YiSunShinDotumM";
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
