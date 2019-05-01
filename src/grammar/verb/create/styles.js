import styled from 'styled-components';

export const Container = styled.main`
 display: flex;

  .submit-row {
    text-align: center;
    width: 100%;
    margin: auto;

    .btn {
      display: inline-block;
      margin: 30px auto;
    }
  }

  .label {
    text-transform: capitalize;
    font-size: 28px;
    letter-spacing: 2px;

    span {
      text-transform: lowercase !important;
    }
  }
`;

export const Heading = styled.h1`
  color: #555;
  font-family: 'Oswald',sans-serif;
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #9c27b0;
`;

export const Legend = styled.legend`
  width: auto;
  padding: 0 10px;
  font-size: 30px;
  color: #555;
  text-align: center;
  font-family: 'Oswald',sans-serif;
  text-transform: uppercase;
  margin-bottom: 5px;

  +.row {
    margin-top: 15px !important;
  }
`;

export const Fieldset = styled.fieldset`
  border: 1px solid #eee;
  padding: 25px;
  margin-top: 20px;
`;

export const HeadingWithMargin = styled.div`
  margin: 0 auto 30px;
  padding: 15px 25px 30px 25px;
  width: 85%;
  max-width: 500px;
  margin: auto;

  .textfield {
    text-align: center;
    color: #555 !important;
    border-bottom: 1px solid rgba(0,0,0,.42);
    font-family: Oswald;
    font-size: 30px;

    &:first-child {
      margin-bottom: 20px;
    }

    &:hover {
      border-bottom: 1px solid rgba(0,0,0,.42) !important;
      border-color: rgba(0,0,0,.42) !important;
      box-shadow: none !important;
    }

    &::placeholder {
      color: #555 !important;
    }
  }

  .textfield:last-child {
    margin-bottom: 0;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 25px !important;
  margin-bottom: 25px;
  width: 82% !important;
  height: 60px;
  font-size: 36px !important;
  font-weight: 700;
  font-family: Oswald;
  margin: 0 auto !important;
  display: inline-block;
  border: none !important;
  box-shadow: none !important;
  border-radius: 3px !important;
}


`;

export const Main = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
  margin-left: 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 20px;
  width: 100%;

  input[type=text] {
    font-size: 28px;
    line-height: 0 !important;
    padding: 0 !important;
    font-family: Oswald;
    margin-bottom: -4px;
    text-align: center;

    &:hover {
      text-decoration: none !important;
      box-shadow: none !important;
      border-bottom: 1px solid rgba(0,0,0,.42);
    }
  }

  .card-column {
    width: 40%;
    max-width: 500px;
    
    &:first-child {
      margin-right: 25px;
    }
  }
  
  .conjunction {
    display: flex;
    align-items: flex-end;
    width: 100%;

    &:first-child {
      margin-bottom: 10px;
    }

    > div {
      max-width: unset !mportant;

      &:first-child {
        margin-right: 10px;
      }

      &:last-child {
        width: 100%;
      }
    }
  }

  .row {
    width: 100%;
    margin-bottom: 25px;
    padding: 15px 26px 35px 20px;
    margin-right: 0;
    box-shadow: 0 0 1px 0 #555;
    background-color: #fff;
  }

  .box {
    background:#FFF;
    margin:40px auto;
}

  .effect2
{
  position: relative;
}
.effect2:before, .effect2:after
{
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 15px;
  left: 10px;
  width: 50%;
  top: 80%;
  max-width:300px;
  background: #777;
  box-shadow: 0 15px 10px #777;
  transform: rotate(-3deg);
}
.effect2:after
{
  transform: rotate(3deg);
  right: 10px;
  left: auto;
}

  .textfield {
    width: 100%;
    color: #555;
  }

  .label {
    font-size: 24px;
    color: #555;
    font-family: 'Oswald',sans-serif;
    width: 70px;
    text-align: right;
  }
`;