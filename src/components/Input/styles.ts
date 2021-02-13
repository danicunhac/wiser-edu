import styled, { css } from "styled-components";
import { darken } from "polished";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 8px;
  border: 1px solid #989fdb;
  padding: 16px;
  width: 100%;
  color: #989fdb;
  box-shadow: 0 0 1px #989fdb;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 39px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff377f;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #989fdb;
      border-color: ${darken(0.2, "#989fdb")};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #989fdb;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #383e71;
    font-size: 10px;

    &::placeholder {
      color: #989fdb;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: inset 0 0 0px 9999px #232129;
      -webkit-box-shadow: inset 0 0 0px 9999px #232129;
      -webkit-text-fill-color: #f4ede8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  height: 20px;

  svg {
    margin: 0;
  }
`;
