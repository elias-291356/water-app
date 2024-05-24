import { styled } from "styled-components";

export const StyledWrapperMyDaylyNormaModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1280px) {
    width: 544px;
  }
`;

export const StyledDaylyNormaForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;
export const StyledGenderList = styled.ul`
  display: flex;
  column-gap: 4px;
`;
export const StyledGenderWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    column-gap: 24px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledDescr = styled.p`
  border: 1px solid var(--secondary-light-sky);
  border-radius: 10px;
  padding: 10px;
  width: 25;
`;
export const StyledWrapLabelGender = styled.div`
  display: flex;
  justify-content: space-between;
  width: 206px;
`;
export const StyledWrapperGenderWeightTime = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 0;
  border: none;
`;
export const StyledWrapCountWater = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledGenderLable = styled.label`
  display: flex;
  column-gap: 8px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;
  height: 44px;
  color: var(--primary-blue);
  border: 1px solid var(--secondary-light-sky);
  font-size: 16px;
  &::placeholder {
    color: var(--primary-blue);
  }
`;

export const StyledReactFormButton = styled.button`
  border-radius: 10px;
  border: none;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primary-blue);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-white);
  @media screen and (min-width: 768px) {
    width: 160px;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const Styledlegend = styled.legend`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
`;
export const StyledFormula = styled.li`
  color: var(--primary-blue);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
`;
export const StyledForGender = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;
export const StyledWaterLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
`;
export const StyledSpanCountWater = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primary-blue);
`;
export const StyledCalculateLabel = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
