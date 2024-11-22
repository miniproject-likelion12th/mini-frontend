import React from "react";
import styled from "styled-components";

const ResultModal = () => {
  return (
    <Container>
      <GreenTextBox>
        <Text>버킷리스트 작성이 끝났어요.</Text>
        <Text>김사자님의 꿈이 이루어지기를</Text>
        <Text>
          이루미가 응원할게요!
          <Logo />
        </Text>
      </GreenTextBox>
      <WhiteTextBox>
        <Text>작성한 버킷리스트는</Text>
        <Text>'MY 버킷리스트' 에서 확인할 수 있어요.</Text>
        <Text>버킷리스트를 달성하셨다면,</Text>
        <Text>이루미에게 알려주세요 :)</Text>
      </WhiteTextBox>
      <ButtonGroup>
        <GreenButton>MY 버킷리스트</GreenButton>
        <WhiteButton>확인</WhiteButton>
      </ButtonGroup>
    </Container>
  );
};

export default ResultModal;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(4px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -40px;
  z-index: 999; /* 다른 콘텐츠 위에 오도록 설정 */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 27px;
`;

const GreenTextBox = styled.div`
  width: 100%;
  height: 126px;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: #8cc894;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  div {
    color: #fbfefd;
    text-align: center;
    font-size: 20px;
    line-height: 22px; /* 110% */
    letter-spacing: -0.408px;
  }
`;

const WhiteTextBox = styled(GreenTextBox)`
  margin-bottom: 44px;
  background-color: #fbfefd;
  div {
    color: #4a4a4a;
    font-size: 19px;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: "banner/irume-white.png",
})`
  width: 20px;
  height: 20px;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const GreenButton = styled.button`
  width: 160px;
  height: 42px;
  border-radius: 10px;
  border: 2px solid #6fbc89;
  background-color: #6fbc89;
  color: white;
  font-size: 17px;
  font-family: "YiSunShinDotumB";
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const WhiteButton = styled(GreenButton)`
  background-color: #fbfefd;
  color: #6fbc89;
`;
