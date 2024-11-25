import styled from "styled-components";

export const Wrapper = styled.div`
  width: 393px;
  min-height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfefd;
`;

export const Container = styled.div`
  height: 100%;
  width: 340px; /* Card의 너비 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  // transition: transform 0.3s ease-in-out;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const LeftArrow = styled.div`
  position: absolute;
  margin-left: -15px;
  top: 70%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 15px;
  color: #6fbc89;
`;

export const RightArrow = styled.div`
  position: absolute;
  margin-left: 350px; /* Card 오른쪽에 위치 */
  top: 70%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 15px;
  color: #6fbc89;
`;

export const CategoryContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 393px;

  // 스크롤바 제거 css
  overflow-x: hidden;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 8px;
  width: 100%;
  padding: 10px 25px;

  // 스크롤바 제거 css
  scrollbar-width: none; /* (Firefox) */
  -ms-overflow-style: none; /* (IE 10+) */
  &::-webkit-scrollbar {
    display: none; /* (Chrome, Safari) */
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 40px;
    height: 100%;
    background: #fff;
    filter: blur(2.5px);
    z-index: 10;
  }

  &::before {
    left: -20px;
  }

  &::after {
    right: -20px;
  }
`;

export const PeriodContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  width: 100%; /* 부모 요소의 전체 너비를 사용 */
  padding-left: 50px; /* 왼쪽 여백 추가 */
  margin-top: 10px; /* 상단 여백 */
`;
