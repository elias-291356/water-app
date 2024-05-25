import React from "react";
import {
  StyledButtonCancel,
  StyledButtonLogout,
  StyledLogoutButtons,
  StyledLogoutTitle,
} from "../LogoutModal/LogoutStyled";
import Modal from "../Modal/Modal";
import { StyledDeleteButtons } from "./DeleteEntryStyled";
const DeleteEntry = ({ show, close }) => {
  return (
    <Modal show={show} close={close} title="Delete entry">
      <StyledLogoutTitle>
        Are you sure you want to delete the entry?
      </StyledLogoutTitle>
      <StyledDeleteButtons>
        <StyledButtonLogout
          onClick={() => {
            close();
          }}
        >
          Delete
        </StyledButtonLogout>
        <StyledButtonCancel onClick={close}>Cancel</StyledButtonCancel>
      </StyledDeleteButtons>
    </Modal>
  );
};

export default DeleteEntry;
