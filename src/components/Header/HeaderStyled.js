import styled from "styled-components";
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

  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 80px;
  }
`;
