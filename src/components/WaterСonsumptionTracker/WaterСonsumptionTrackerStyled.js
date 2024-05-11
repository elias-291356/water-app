import { styled } from "styled-components";

export const StyledTitle = styled.h1`
  padding-top: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14286;

  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 36px;
  }
`;
export const StyledSybTitle = styled.h2`
  padding-top: 16px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.25;
`;
export const StyledListName = styled.p`
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
`;
export const StyledButtonTracker = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
    border-radius: 10px;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
  }
`;
export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;
export const StyledSectionBanner = styled.section`
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 0px;
  }
`;
export const StyledListTolls = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-bottom: 24px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;
export const StyledSvgTracker = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
