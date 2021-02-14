import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 519px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
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

  @media (max-width: 519px) {
    position: absolute;
    z-index: 1;
  }

  @media (min-width: 520px) {
    margin: 0 7em;
    animation: ${appearFromRight} 1s;
  }

  form {
    margin: 16px 0 32px;
    width: 256px;
    display: flex;
    flex-direction: column;

    @media (max-width: 519px) {
      margin: 0 0 24px;
      padding: 28px;
      background: #faf5ff;
      border-radius: 8px;
      width: 311px;
    }

    h1 {
      font-size: 40px;
      line-height: 48px;
      color: #383e71;
      align-self: flex-start;
      margin-bottom: 16px;

      @media (max-width: 519px) {
        align-self: center;
        text-align: center;
        font-size: 24px;
        line-height: 32px;
      }
    }

    p {
      text-align: left;
      max-width: 222px;

      font-size: 16px;
      font-weight: 600;
      line-height: 20px;

      color: #989fdb;
      margin-bottom: 43px;

      @media (max-width: 519px) {
        margin-bottom: 20px;
        font-size: 12px;
        max-width: 255px;
      }
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

      @media (max-width: 519px) {
        margin-bottom: 8px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 519px) {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  img {
    object-fit: cover;
  }

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

export const Error = styled.span`
  font-size: 10px;
  color: #ff377f;
  font-weight: 400;
`;
