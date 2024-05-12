import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Header from "../../components/Header/Header";
// import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StyledLogo } from "../../components/Logo/LogoStyled";
import sprite from "../../images/sprite.svg";
import {
  StyledAuthButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSigninLink,
  StyledSignUpTitle,
  StyledSvgIconHide,
  StyledWrapInput,
} from "./SignupPageStyled";
const SignupPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  console.log(errors);
  return (
    <>
      <Header />
      <StyledSignUpTitle>Sign Up</StyledSignUpTitle>

      <StyledForm>
        <div>
          <StyledLabel>Enter your email</StyledLabel>
        </div>
        <div>
          <StyledInput type="text" placeholder="E-mail" />
        </div>
        <div>
          <StyledLabel>Enter your password</StyledLabel>
        </div>
        <StyledWrapInput>
          <StyledInput type="text" placeholder="Password" />
          <StyledSvgIconHide>
            <use href={`${sprite}#icon-hide`}></use>
          </StyledSvgIconHide>
        </StyledWrapInput>
        <div>
          <StyledLabel>Repeat password</StyledLabel>
        </div>

        <StyledWrapInput>
          <StyledInput type="text" placeholder="Repeat password" />
          <StyledSvgIconHide>
            <use href={`${sprite}#icon-hide`}></use>
          </StyledSvgIconHide>
        </StyledWrapInput>
        <StyledAuthButton type="submit">Sign Up</StyledAuthButton>
      </StyledForm>
      <StyledSigninLink to="/sign-in">Sign In </StyledSigninLink>
      <AuthForm />
    </>
  );
};

export default SignupPage;
