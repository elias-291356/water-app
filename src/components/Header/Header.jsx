import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import {
  StyledHeaderList,
  StyledHeaderUser,
  StyledHeaderUserItem,
  StyledHeaderUserItemLink,
  StyledLogo,
} from "./HeaderStyled.js";

const Header = () => {
  return (
    <header>
      <nav>
        <StyledHeaderList>
          <li>
            <Link to="/">
              <StyledLogo>
                <use href={`${sprite}#icon-logo`}></use>
              </StyledLogo>
            </Link>
          </li>
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
    </header>
  );
};

export default Header;
