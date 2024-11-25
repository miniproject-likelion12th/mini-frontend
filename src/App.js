import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./sign-up/SignUp";
import { createGlobalStyle } from "styled-components";
import ChoosePeriod from "./write-list/choose-period/ChoosePeriod";
import WriteDetail from "./write-list/write-detail/WriteDetail";
import View from "./view/View";
import WriteGoal from "./write-list/write-goal/WriteGoal";
import WriteYear from "./write-list/write-detail/WriteYear";
import PageTemplate from "./write-list/style-component/PageTemplate";
import ProtectedRoute from "./component/common/ProtectedRoute";

const protectedRoutes = [
  {
    path: "/ChoosePeriod",
    element: <PageTemplate container={<ChoosePeriod />} />, // element로 JSX 컴포넌트 전달
  },
  {
    path: "/WriteDetail",
    element: <PageTemplate container={<WriteDetail />} />,
  },
  {
    path: "/WriteYear",
    element: <PageTemplate container={<WriteYear />} />,
  },
  {
    path: "/WriteGoal",
    element: <WriteGoal />,
  },
  {
    path: "/view",
    element: <View />,
  },
];

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'YiSunShinDotumB'; /* 폰트 이름 */
  src: url('/assets/fonts/YiSunShinDotumB.woff') format('woff'); /* 파일 경로와 형식 */
  font-weight: normal; /* 가중치 설정 */
  font-style: normal; /* 스타일 설정 */
}

@font-face {
  font-family: 'YiSunShinDotumM';
  src: url('/assets/fonts/YiSunShinDotumM.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'YiSunShinDotumL';
  src: url('/assets/fonts/YiSunShinDotumL.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

  body {
    display: flex;
    justify-content: center;
    background-color: #FBFEFD;
    font-family: 'YiSunShinDotumM', sans-serif;
      // 스크롤바 제거 css 모음
  scrollbar-width: none; /* (Firefox) */
  -ms-overflow-style: none; /* (IE 10+) */
  &::-webkit-scrollbar {
    display: none; /* (Chrome, Safari) */
  }
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* ProtectedRoute를 적용한 라우트 동적으로 추가 */}
          {protectedRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ))}
          {/* 기본적으로 모든 라우트가 /login으로 리디렉션 */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
