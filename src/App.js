import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
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

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    // ProtectedRoute를 적용한 라우트 동적으로 추가
    ...protectedRoutes.map(({ path, element }) => ({
      path,
      element: <ProtectedRoute>{element}</ProtectedRoute>, // JSX 컴포넌트를 ProtectedRoute로 감싸기
    })),
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

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

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
