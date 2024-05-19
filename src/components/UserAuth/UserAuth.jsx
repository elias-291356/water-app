import React from "react";
import { StyledHeaderUser } from "../Header/HeaderStyled";
import {
  StyledHeaderUserItem,
  StyledHeaderUserItemLink,
} from "./UserAuthStyled";
import sprite from "../../images/sprite.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/selectors";
import { logoutThunk } from "../../redux/thunk";

const UserAuth = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const onClickToSigninPage = () => {
    navigate("/signin");
  };

  const onHandleLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      {isLogin ? (
        <StyledHeaderUserItem>
          <StyledHeaderUserItemLink onClick={onClickToSigninPage}>
            Sign in
          </StyledHeaderUserItemLink>

          <StyledHeaderUser>
            <use href={`${sprite}#icon-user`}></use>
          </StyledHeaderUser>
          <button onClick={onHandleLogOut} type="button">
            log out
          </button>
        </StyledHeaderUserItem>
      ) : (
        <StyledHeaderUserItem>
          <StyledHeaderUserItemLink onClick={onClickToSigninPage}>
            Sign in
          </StyledHeaderUserItemLink>

          <StyledHeaderUser>
            <use href={`${sprite}#icon-user`}></use>
          </StyledHeaderUser>
        </StyledHeaderUserItem>
      )}
    </>
  );
};

export default UserAuth;
