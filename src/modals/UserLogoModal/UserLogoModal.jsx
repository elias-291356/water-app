import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import {
  StyledDropdownToggle,
  StyledDropdownMenu,
  StyledDropdownItem,
  StyledHeaderUserSelect,
  StyledWrapSelectUserItem,
  StyledHeaderUserSelectIcon,
} from "../UserLogoModal/UserLogoModalStyled";
import sprite from "../../images/sprite.svg";
import { useState } from "react";

import SettingModal from "../../modals/SettingModal/SettingModal";
import LogoutModal from "../../modals/LogoutModal/LogoutModal";

const UserLogoModal = () => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(true);
    console.log("test");
  };
  const openSettingModal = () => {
    setIsSettingModalOpen(true);
  };

  const closeSettingModal = () => {
    setIsSettingModalOpen(false);
    setIsOpen(false);
  };

  const closeModalsAndDropdown = () => {
    setIsSettingModalOpen(false);
    setIsLogoutModalOpen(false);
    setIsOpen(false);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
    setIsOpen(false);
  };

  return (
    <Dropdown show={isOpen} onClick={toggleDropdown}>
      <StyledDropdownToggle>
        <StyledHeaderUserSelect>
          <use href={`${sprite}#icon-down`}></use>
        </StyledHeaderUserSelect>
      </StyledDropdownToggle>

      {isOpen && (
        <StyledDropdownMenu>
          <StyledWrapSelectUserItem>
            <StyledHeaderUserSelectIcon>
              <use href={`${sprite}#icon-tools`}></use>
            </StyledHeaderUserSelectIcon>
            <StyledDropdownItem onClick={openSettingModal}>
              Setting
            </StyledDropdownItem>
          </StyledWrapSelectUserItem>

          <StyledWrapSelectUserItem>
            <StyledHeaderUserSelectIcon>
              <use href={`${sprite}#icon-exit`}></use>
            </StyledHeaderUserSelectIcon>
            <StyledDropdownItem onClick={openLogoutModal}>
              Log out
            </StyledDropdownItem>
          </StyledWrapSelectUserItem>
        </StyledDropdownMenu>
      )}
      {isSettingModalOpen && (
        <SettingModal show={isSettingModalOpen} close={closeSettingModal} />
      )}
      {isLogoutModalOpen && (
        <LogoutModal show={isLogoutModalOpen} close={closeLogoutModal} />
      )}
    </Dropdown>
  );
};

export default UserLogoModal;
