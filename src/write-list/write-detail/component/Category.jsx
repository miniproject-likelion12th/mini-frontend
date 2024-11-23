import React from "react";
import styled from "styled-components";

const Category = ({ text, selectedCategory, onChange }) => {
  const checked = selectedCategory === text;
  const imgSrc = `/categoryImg${checked ? "/green" : ""}/${text.slice(
    0,
    2
  )}.svg`;

  return (
    <Label className={checked ? "checked" : ""}>
      <Image src={imgSrc} />
      <Input type="radio" value={text} checked={checked} onChange={onChange} />
      {text}
    </Label>
  );
};

export default Category;

const Label = styled.label`
  width: fit-content;
  height: 22px;
  padding: 7px 10px;
  background: #fbfefd;
  border-radius: 15px;
  border: 2px solid #979797;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  box-shadow: 0px 1px 2px 0px #00000040;
  cursor: pointer;
  font-family: "YiSunShinDotumB";
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #979797;

  &.checked {
    border-color: #6fbc89;
    color: #6fbc89;
  }
`;

const Image = styled.img`
  width: 22px;
  height: 22px;
`;

const Input = styled.input`
  display: none;
`;
