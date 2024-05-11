import styled from "styled-components";

export const StyledDescrSection = styled.section`
  display: flex;
  flex-direction: column;

  row-gap: 12px;
  border-radius: 10px;
  padding: 24px 16px;
  width: 280px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background-color: var(--secondary-light-blue);

  @media screen and (min-width: 768px) {
    width: 494px;
  }

  @media screen and (min-width: 1280px) {
    align-self: flex-end;
  }
`;

export const StyledDescrWhy = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
`;

export const StyledItemWhy = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;

export const StyledDescrList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  padding-left: 20px;

  & > li::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--primary-blue);
  }
`;
