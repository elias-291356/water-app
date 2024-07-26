import { styled } from "styled-components";

export const StyledWrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const StyledSvg = styled.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
  stroke: var(--primary-blue);
`;
export const StyledSvgPlusMinus = styled.svg`
  width: 24px;

  height: 24px;
  fill: transparent;
  stroke: var(--primary-blue);
`;
export const StyledWaterTime = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;
export const StyledWrapCounTime = styled.div`
  display: flex;
  column-gap: 16px;
`;
export const StyledWrapperInputes = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  & > :nth-child(2) {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11111;
  }
`;
export const StyledWrapperLabels = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  > div {
    position: absolute;
    top: 48px;
    padding-left: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: var(--primary-blue);
  }
`;
export const StyledInput = styled.input`
  border: 2px solid var(--secondary-light-sky);
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;

  &::placeholder {
    color: var(--primary-blue);
  }
  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media screen and (min-width: 1280px) {
    width: 544px;
  }
`;
export const StyledCorrectData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;
export const StyledSubtitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
`;
export const StyledWrappButtons = styled.div`
  display: flex;
  column-gap: 7px;
  align-items: center;
`;
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: 2px solid var(--primary-blue);
  border-radius: 30px;
  padding: 10px;
  width: 44px;
  height: 44px;
  box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  background: var(--primary-white);
`;
export const StyledCountOfWater = styled.p`
  background-color: var(--secondary-light-sky);
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
`;
export const StyledButtonAndCountOfWater = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    width: 256px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const StyledSaveButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding: 8px 30px;
  width: 256px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primary-blue);
  color: var(--primary-white);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const StyledWaterAmount = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: var(--primary-blue);
`;
