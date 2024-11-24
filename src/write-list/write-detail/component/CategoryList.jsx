import React from "react";
import Category from "./Category";
import styled from "styled-components";
import { categoryList } from "../../definition/definition";

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
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
