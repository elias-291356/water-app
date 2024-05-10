import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { StyledLogo } from "./LogoStyled";
const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo>
        <use href={`${sprite}#icon-logo`}></use>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
