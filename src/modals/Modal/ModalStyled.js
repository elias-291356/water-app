import React from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  width: 30vw;
  height: auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.header`
  position: relative;
  border-bottom: 1px solid #dddddd;
  text-align: center;
`;

export const ModalHeaderTitle = styled.h2`
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 1rem;
    height: auto;
    transition: all 0.3s;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

export const ModalContent = styled.main`
  border-bottom: 1px solid #dddddd;
  padding: 2rem 0;
`;

export const ModalFooter = styled.footer`
  padding: 2rem 0;
  padding-bottom: 0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  font-weight: 600;
  &:hover {
    color: rgba(54, 67, 72, 0.8);
  }
`;

export const SubmitButton = styled(Button)`
  background-color: #364348;
  color: #fff;
  &:hover {
    background-color: rgba(54, 67, 72, 0.8);
  }
`;
export const StyledModalCloseSvg = styled.svg`
  height: 24px;
  width: 24px;
`;
