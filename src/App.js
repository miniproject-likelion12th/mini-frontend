import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./login/Login";
import SignUp from "./sign-up/SignUp";
import { createGlobalStyle } from "styled-components";
import ChoosePeriod from "./write-list/choose-period/ChoosePeriod";
import WriteDetail from "./write-list/write-detail/WriteDetail";
import WriteGoal from "./write-list/write-goal/WriteGoal";
import WriteYear from "./write-list/write-detail/WriteYear";
import PageTemplate from "./write-list/style-component/PageTemplate";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/ChoosePeriod",
      element: <PageTemplate container={<ChoosePeriod />} />,
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
      element: <PageTemplate container={<WriteGoal />} />,
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
