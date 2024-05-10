import React from "react";
import sprite from "../../images/sprite.svg";
import Logo from "../Logo/Logo";
import {
  StyledHeader,
  StyledHeaderList,
  StyledHeaderUser,
  StyledHeaderUserItem,
  StyledHeaderUserItemLink,
} from "./HeaderStyled.js";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledHeaderList>
          <Logo />
          <StyledHeaderUserItem>
            <StyledHeaderUserItemLink to="/signin">
              Sign in
            </StyledHeaderUserItemLink>
            <StyledHeaderUser>
              <use href={`${sprite}#icon-user`}></use>
            </StyledHeaderUser>
          </StyledHeaderUserItem>
        </StyledHeaderList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
