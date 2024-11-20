import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./login/Login";
import SignUp from "./sign-up/SignUp";
import { createGlobalStyle } from "styled-components";
import ChoosePeriod from "./write-list/choose-period/ChoosePeriod";

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
      element: <ChoosePeriod />,
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
    font-family: 'YiSunShinDotumM';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinDotumM.woff') format('woff');
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
