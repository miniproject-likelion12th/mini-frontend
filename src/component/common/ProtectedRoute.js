import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // 쿠키로 토큰 관리

// protectedRoute 개선
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("access_token"); // 저장된 토큰 가져오기

  // 로그인 상태 확인
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children; // 로그인한 경우 자식 요소를 렌더링
};

export default ProtectedRoute;
