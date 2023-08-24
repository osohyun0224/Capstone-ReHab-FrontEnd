import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-family: "Inter var", sans-serif;
  font-weight: bold;
  position: relative; 
  margin-top:20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  position: absolute; 
  left: 100px; 
  top: 50%;
  transform: translateY(-50%);
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  right: 70px; 
  align-items: center;
`;

const MainLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none; 
    outline: none;
  }
`;

const Divider = styled.div`
  height: 30px;
  width: 1px;
  background-color: black;
  margin-left: 20px;
  margin-right: 30px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <MainLink to="/">Logo</MainLink>
      </Logo>
      <Nav>
        <MainLink to="/" style={{ marginRight: '40px' }}>메인 페이지</MainLink>
        <MainLink to="/mycourse" style={{ marginRight: '20px' }}>수강내역</MainLink>
        <Divider />
        <MainLink to="/login">로그인</MainLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;