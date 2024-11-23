import React from "react";
import Category from "./Category";
import styled from "styled-components";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const categoryList = [
    "여행",
    "취미/문화",
    "건강/운동",
    "소비/저축/기부",
    "자기계발",
    "기타",
    "커리어",
    "가족/친구",
  ];

  return (
    <Wrapper>
      {categoryList.map((category, key) => (
        <Category
          text={category}
          key={key}
          selectedCategory={selectedCategory}
          onChange={(e) => setSelectedCategory(category)}
        />
      ))}
    </Wrapper>
  );
};

export default CategoryList;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 19px;
`;
