import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { StyledLogo } from "./LogoStyled";
const Logo = () => {
  return (
    <li>
      <Link to="/">
        <StyledLogo>
          <use href={`${sprite}#icon-logo`}></use>
        </StyledLogo>
      </Link>
    </li>
  );
};

export default Logo;
