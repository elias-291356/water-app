import React, { useEffect } from "react";
import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalHeaderTitle,
  CloseButton,
  ModalFooter,
  SubmitButton,
  CancelButton,
  ModalContent,
  StyledModalCloseSvg,
} from "../Modal/ModalStyled";
import { createPortal } from "react-dom";
import sprite from "../../images/sprite.svg";

const Modal = ({ show, close, title, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (show) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [show, close]);

  return createPortal(
    <ModalContainer className={show ? "show" : ""} onClick={close}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalHeaderTitle>{title}</ModalHeaderTitle>
          <CloseButton onClick={close}>
            <StyledModalCloseSvg>
              <use href={`${sprite}#icon-close`}></use>
            </StyledModalCloseSvg>
          </CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <CancelButton onClick={close}>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;
