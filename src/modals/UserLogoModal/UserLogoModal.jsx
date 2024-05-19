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

const UserLogoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
            <StyledDropdownItem>Setting</StyledDropdownItem>
          </StyledWrapSelectUserItem>

          <StyledWrapSelectUserItem>
            <StyledHeaderUserSelectIcon>
              <use href={`${sprite}#icon-exit`}></use>
            </StyledHeaderUserSelectIcon>
            <StyledDropdownItem>Log out</StyledDropdownItem>
          </StyledWrapSelectUserItem>
        </StyledDropdownMenu>
      )}
    </Dropdown>
  );
};

export default UserLogoModal;
