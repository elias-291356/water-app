import Modal from "../Modal/Modal";
import React from "react";
import {
  StyledLogoutTitle,
  StyledButtonLogout,
  StyledButtonCancel,
  // StyledLogoutContainer,
  StyledLogoutButtons,
} from "./LogoutStyled";

const Logout = ({ show, close }) => {
  return (
    <Modal show={show} close={close} title="Log Out">
      {/* <StyledLogoutContainer> */}
      <StyledLogoutTitle>Do you really want to leave?</StyledLogoutTitle>
      <StyledLogoutButtons>
        <StyledButtonLogout
          onClick={() => {
            close();
          }}
        >
          Log out
        </StyledButtonLogout>
        <StyledButtonCancel onClick={close}>Cancel</StyledButtonCancel>
      </StyledLogoutButtons>
      {/* </StyledLogoutContainer> */}
    </Modal>
  );
};

export default Logout;
{
}
