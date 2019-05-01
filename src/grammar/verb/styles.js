import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const SideBar = styled.nav`
  position: absolute;
  width: 250px;
  height: 100vh;
  background-color: #eee;
  left: 0;
  top: 0;
  padding: 25px;
`;

export const MainArea = styled.div`
  margin-left: 250px;
  padding: 25px;
`;

export const AddVerbButton = styled(Button)`
  color: #fff;
`;

export const WhiteLink = styled(Link)`
  color: #fff;
  display: block;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;



