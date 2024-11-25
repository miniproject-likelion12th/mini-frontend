import React from "react";
import styled from "styled-components";

const CategoryBtn = ({
  text,
  icon,
  whiteIcon,
  isSelected,
  onClick,
  onHover,
  onLeave,
  isHovered,
}) => {
  return (
    <CategoryButton
      bgColor={isSelected ? "#6FBC89" : "#ffffff"}
      color={isSelected ? "#ffffff" : "#7a7a7a"}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <CategoryIcon
        src={isSelected || isHovered ? whiteIcon : icon}
        alt={`${text} icon`}
      />
      <CategoryText>{text}</CategoryText>
    </CategoryButton>
  );
};

export default CategoryBtn;

const CategoryButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["bgColor", "color"].includes(prop),
})`
  display: flex;
  padding: 7px 10px;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid #6fbc89;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px; /* 146.667% */
  letter-spacing: -0.408px;

  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #6fbc89;
    color: #ffffff;
  }
`;

const CategoryIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const CategoryText = styled.span`
  text-align: center;
  font-family: "YiSunShinDotumB";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.408px;
`;
