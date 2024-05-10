import React from "react";
import { StyledHeaderUser } from "../Header/HeaderStyled";
import {
  StyledHeaderUserItem,
  StyledHeaderUserItemLink,
} from "./UserAuthStyled";
import sprite from "../../images/sprite.svg";
const UserAuth = () => {
  return (
    <>
      <StyledHeaderUserItem>
        <StyledHeaderUserItemLink to="/signin">
          Sign in
        </StyledHeaderUserItemLink>
        <StyledHeaderUser>
          <use href={`${sprite}#icon-user`}></use>
        </StyledHeaderUser>
      </StyledHeaderUserItem>
    </>
  );
};

export default UserAuth;
