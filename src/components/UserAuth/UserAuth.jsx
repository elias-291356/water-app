import React from "react";
import { StyledHeaderUser } from "../Header/HeaderStyled";
import {
  StyledHeaderUserItem,
  StyledHeaderUserItemLink,
} from "./UserAuthStyled";
import sprite from "../../images/sprite.svg";
import { useNavigate } from "react-router-dom";

const UserAuth = () => {
  const navigate = useNavigate();

  const onClickToSigninPage = () => {
    navigate("/sign-in");
  };
  return (
    <>
      <StyledHeaderUserItem>
        <StyledHeaderUserItemLink onClick={onClickToSigninPage}>
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
