import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledSvgIconShowPassword = styled.svg`
  position: absolute;
  top: 12px;
  right: 10px;
  width: 16px;
  height: 16px;
  stroke: var(--primary-blue);
  fill: transparent;
`;
export const StyledSignUpTitle = styled.h1`
  padding-bottom: 16px;
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
`;
export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
`;

export const StyledAuthButton = styled.button`
  margin-top: 8px;
  border-radius: 10px;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primary-blue);
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-white);
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledSigninLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-blue);
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 16px;
`;
export const StyledWrapInput = styled.div`
  position: relative;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

//======================= INPUTES
export const StyledInputEmail = styled.input`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  border: 2px solid
    ${(props) =>
      props.$isValidBorderEmail ? "var(--secondary-light-sky)" : "red"};

  &::placeholder {
    color: var(--secondary-blue);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledInputPassword = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  border: 2px solid
    ${(props) =>
      props.$isValidBorderPassword ? "var(--secondary-light-sky)" : "red"};

  &::placeholder {
    color: var(--secondary-blue);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledInputConfirm = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  border: 2px solid
    ${(props) =>
      props.$isValidBorderConfirm ? "var(--secondary-light-sky)" : "red"};

  &::placeholder {
    color: var(--secondary-blue);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
