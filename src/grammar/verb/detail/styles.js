import styled from 'styled-components';

export const Container = styled.main`
  text-align: center;

  .wrapper {
    display: flex;
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .section {
    display: flex;
  }

  .wrapper {
    text-align: left;

    &:first-child {
      width: 80px;
    }

    > div {
      display: inline-block !important;
      margin-bottom: 5px;
    }
  }

  .divider {
    margin: 0 15px;
    font-size: 22px;
    line-height: 23px;
    color: #ff4081;

  }

  .person {
    color: #fff;
    font-family: Oswald;
    display: inline-block;
    font-size: 20px;
    padding: 0:
    padding: 15px 0;
    line-height: 15px;
    text-align: left;
    margin-right: 5px;
    margin-left: 5px;
  }

  .value {
    font-size: 20px;
    line-height: 20px;
    color: #fff;
    text-align: left;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Oswald',sans-serif;
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
`;

export const Legend = styled.legend`
  width: auto;
  font-size: 30px;
  margin-bottom: 15px;
  color: #fff;
  font-family: 'Oswald',sans-serif;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  margin: 30px auto;
  justify-content: center;

  > div {
    margin-bottom: 30px;
  }

  > div:first-child {
    margin-right: 40px;
  }

  .row {
    margin-bottom: 5px;
  }

  .label {
    font-size: 20px;
    color: #fff;
    font-family: 'Oswald',sans-serif;
    font-weight: 700;
  }
`;