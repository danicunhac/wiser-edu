import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  margin-top: 24px;
  transition: background-color;

  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;

  &:hover {
    background: ${shade(0.2, "#9d25b0")};
  }
`;
