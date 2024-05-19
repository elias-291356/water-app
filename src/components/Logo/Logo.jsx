import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { selectIsLogin } from "../../redux/selectors";
import { StyledLogo } from "./LogoStyled";
const Logo = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <li>
      {isLogin ? (
        <Link to="/home">
          <StyledLogo>
            <use href={`${sprite}#icon-logo`}></use>
          </StyledLogo>
        </Link>
      ) : (
        <Link to="/">
          <StyledLogo>
            <use href={`${sprite}#icon-logo`}></use>
          </StyledLogo>
        </Link>
      )}
    </li>
  );
};

export default Logo;
