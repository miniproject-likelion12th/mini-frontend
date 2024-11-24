import React from "react";
import styled from "styled-components";

const GreenBtn = (iconSrc, text) => {
  return (
    <Container>
      <Button>
        <Icon src={iconSrc} alt={"icon"} />
        <Text>{text}</Text>
      </Button>
    </Container>
  );
};

export default GreenBtn;

const Container = styled.div``;
const Button = styled.div`
  display: flex;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 12px;
  border: 1px solid #e6f6eb;
  background: #e6f6eb;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
const Text = styled.span`
  color: #7a7a7a;
  text-align: center;
  font-family: "YiSunShinDotumB";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 169.231% */
  letter-spacing: -0.408px;
`;
