import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./login/Login";
import SignUp from "./sign-up/SignUp";
import { createGlobalStyle } from "styled-components";

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

  @font-face {
    font-family: 'YiSunShinDotumB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinDotumB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'YiSunShinDotumL';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YiSunShinDotumL.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'YiSunShinDotumM', sans-serif;
    width: 100%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    @media (width > 393px){
      width: 393px;
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
