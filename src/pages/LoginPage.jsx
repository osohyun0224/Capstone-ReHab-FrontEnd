import styled from "styled-components";
import LoginComponents from "../components/Accounts/LoginComponents";
import { useState } from "react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: -50px;
`;

const LoginPage = () => {
  const [userType, setUserType] = useState(null); // 유저 타입 상태 추가

  // 로그인 성공시 호출되는 함수
  const handleLoginSuccess = (response) => {
    setUserType(response.type);
  };

  return (
    <PageContainer>
      <CenteredContainer>
        <LoginComponents onLoginSuccess={handleLoginSuccess} />
      </CenteredContainer>
    </PageContainer>
  );
};

export default LoginPage;
