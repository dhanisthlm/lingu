import styled from 'styled-components';

export const MainNav = styled.nav`
  height: 60px;
  background-color: #1D2D3C;
  text-align: center;

  span {
    font-family: Oswald;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    font-size: 24px;
    justify-content: space-between;
    width: 200px;
    height: 100%;
    padding: 10px 0;
    text-transform: uppercase
    letter-spacing: 1px;

    &:first-child {
      margin-left: 300px;
    }
  }
`;