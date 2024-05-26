import React from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

export const ModalBox = styled.div`
  width: 280px;
  padding: 32px 12px;
  border-radius: 10px;
  background-color: var(--primary-white);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1008px;
  }
`;
export const ModalSecondBox = styled.div`
  width: 280px;
  padding: 32px 12px;
  border-radius: 10px;
  background-color: var(--primary-white);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
  }
`;

export const ModalHeader = styled.header`
  position: relative;
`;

export const ModalHeaderTitle = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--primary-black);
  padding-bottom: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalContent = styled.main``;

export const ModalFooter = styled.footer`
  padding-bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  font-weight: 600;
`;

export const SubmitButton = styled(Button)`
  background-color: #364348;
  color: #fff;
`;
export const StyledModalCloseSvg = styled.svg`
  height: 24px;
  width: 24px;
`;
