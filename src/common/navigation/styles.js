import styled from 'styled-components';

export const CenteredButtonGroup = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  display: inline-block !important;
  border: none !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  flex-direction: column;

  .btn {
    height: 60px !important;
  }

  .label {
    text-transform: uppercase !important;
    font-family: Oswald;
    font-size: 18px;
    border-radius: 5px 5px 5px 5px !important;
    display: inline-block;
    height: 100%;
    padding: 0 10px;
    line-height: 36px;
  }
`;