import { styled } from "styled-components";

export const StyledLogoutTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: var(--primary-black);
  width: 256px;
  @media screen and (min-width: 768px) {
    padding-top: 16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledButtonLogout = styled.button`
  border: none;
  border-radius: 10px;
  padding: 8px 30px;

  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--secondary-red);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-white);
  @media screen and (min-width: 768px) {
    width: 160px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledButtonCancel = styled.button`
  border: none;
  border-radius: 10px;
  padding: 8px 30px;

  background: var(--secondary-blue);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-blue);
  @media screen and (min-width: 768px) {
    width: 160px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledLogoutButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding-top: 16px;
  width: 256px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    column-gap: 24px;
    width: 344px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0px;
  }
`;
