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
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };
    if (show) {
      modalRef.current.focus();
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "visible";
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
