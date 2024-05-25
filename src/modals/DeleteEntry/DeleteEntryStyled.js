import { styled } from "styled-components";

export const StyledDeleteButtons = styled.div`
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
    padding-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }
`;
