import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLogo = styled.svg`
  height: 48px;
  width: 102px;
`;
export const StyledHeaderUser = styled.svg`
  fill: transparent;
  stroke: var(--primary-black);
  height: 28px;
  width: 28px;
`;
export const StyledHeaderList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  @media screen and (min-width: 320px) {
    margin-right: auto;
    margin-left: auto;
    height: 48px;
    width: 280px;
    border: solid tomato 2px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
    min-width: 1440px;
  }

  /* align-items: center; */
`;
