import React, { useState } from "react";
import styled from "styled-components";

const Category = ({ text }) => {
  const [clicked, setClicked] = useState(false);
  const imgSrc = `/categoryImg${clicked ? "/green" : ""}/${text.slice(
    0,
    2
  )}.svg`;

  return (
    <Wrapper clicked={clicked} onClick={() => setClicked((prev) => !prev)}>
      <Image src={imgSrc} />
      <Text clicked={clicked}>{text}</Text>
    </Wrapper>
  );
};

export default Category;

const Wrapper = styled.div`
  width: fit-content;
  height: 22px;
  padding: 7px 10px;
  background: #fbfefd;
  border-radius: 15px;
  border: 2px solid ${(props) => (props.clicked ? "#6FBC89" : "#979797")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  box-shadow: 0px 1px 2px 0px #00000040;
  cursor: pointer;
`;

const Image = styled.img`
  width: 22px;
  height: 22px;
  fill: ${(props) => (props.clicked ? "#6FBC89" : "#979797")};
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: ${(props) => (props.clicked ? "#6FBC89" : "#979797")};
`;
