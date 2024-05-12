import { styled } from "styled-components";

export const StyledInputInput = styled.input`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  padding: 12px 10px;
  width: 280px;
  height: 44px;
  border-color: var(--secondary-light-sky);

  &::placeholder {
    color: var(--secondary-blue);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;
