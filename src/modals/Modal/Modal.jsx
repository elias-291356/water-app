import React, { useEffect, useRef } from "react";
import {
  ModalContainer,
  ModalBox,
  ModalHeader,
  ModalHeaderTitle,
  CloseButton,
  ModalContent,
  StyledModalCloseSvg,
} from "../Modal/ModalStyled";
import { createPortal } from "react-dom";
import sprite from "../../images/sprite.svg";
const Modal = ({ show, close, children, title }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.focus();
    }
  }, [show]);

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      close();
    }
  };

  useEffect(() => {
    if (show) {
      window.addEventListener("keydown", handleEscape);
    } else {
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [show, close]);

  return createPortal(
    <ModalContainer className={show ? "show" : ""} onClick={close}>
      <ModalBox
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <ModalHeader>
          <ModalHeaderTitle>{title}</ModalHeaderTitle>
          <CloseButton onClick={close}>
            <StyledModalCloseSvg>
              <use href={`${sprite}#icon-close`}></use>
            </StyledModalCloseSvg>
          </CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        {/* <ModalFooter></ModalFooter> */}
      </ModalBox>
    </ModalContainer>,
    document.getElementById("modal")
  );
};

export default Modal;
