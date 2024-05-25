import styled from "styled-components";

export const StyledAmount = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;
export const StyledInput = styled.input`
  border: 2px solid var(--secondary-light-sky);
  border-radius: 6px;
  padding: 12px 10px;
  width: 120px;

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
