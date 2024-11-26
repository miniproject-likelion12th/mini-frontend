import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Banner = ({ backButton }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {backButton && <BackButton onClick={() => navigate(-1)} />}
      <Irume />
    </Wrapper>
  );
};

export default Banner;

export const Wrapper = styled.div`
  width: 100%;
  height: 63px;
  margin-bottom: 4px;
  background: #fbfefd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fbfefd;
  border-bottom: 1px solid #8a888861;
  box-shadow: 0px 4px 3px rgba(138, 136, 136, 0.1);
`;

const BackButton = styled.img.attrs({
  src: "banner/뒤로가기.svg",
})`
  width: 27px;
  height: 27px;
  position: absolute;
  left: 28px;
  cursor: pointer;
`;

const Irume = styled.img.attrs({
  src: "banner/irume-banner.svg",
})`
  width: 88px;
  height: 24px;
`;
