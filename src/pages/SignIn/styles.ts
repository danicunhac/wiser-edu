import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  h1 {
    font-size: 40px;
    line-height: 48px;
    color: #383e71;
    align-self: flex-start;
    margin-left: 80px;
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 16px 80px 32px;
    width: 256px;

    p {
      text-align: left;
      max-width: 222px;

      font-size: 16px;
      font-weight: 600;
      line-height: 20px;

      color: #989fdb;
      margin-bottom: 43px;
    }

    label {
      justify-self: flex-start;
      text-transform: uppercase;
      font-weight: 400;
      color: #383e71;
      font-size: 10px;
      line-height: 28px;
      margin-left: 5px;
    }

    > div {
      margin-bottom: 16px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 765px;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    z-index: 1;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 20px;
  color: #989fdb;
  align-items: center;

  a {
    color: #9d25b0;
  }
`;
