import React, { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Header from "../../components/Header/Header";
// import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import sprite from "../../images/sprite.svg";

import {
  StyledAuthButton,
  StyledForm,
  StyledFormWrapper,
  StyledLabel,
  StyledSigninLink,
  StyledSignUpTitle,
  StyledWrapInput,
  StyledInputEmail,
  StyledInputPassword,
  StyledSvgIconShowPassword,
} from "../SignupPage/SignupPageStyled";
import { StyledALoginGoogle, StyledInputInput } from "./SigninPageStyled";
import { BASE_URL } from "../../service/api";
const SignupPage = () => {
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <Header />
      <StyledFormWrapper>
        <StyledSignUpTitle>Sign In</StyledSignUpTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Enter your email</StyledLabel>
          <StyledInputInput
            name="email"
            required
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: true,
            })}
          />
          <StyledLabel>Enter your password</StyledLabel>
          <StyledWrapInput>
            <StyledInputInput
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <StyledSvgIconShowPassword>
              <use href={`${sprite}#icon-hide`}></use>
            </StyledSvgIconShowPassword>
          </StyledWrapInput>

          <StyledAuthButton type="submit">Sign In</StyledAuthButton>
        </StyledForm>
        <StyledSigninLink to="/sign-up">Sign Up</StyledSigninLink>
        <StyledALoginGoogle href={`${BASE_URL}/api/auth/google`}>
          Login with google
        </StyledALoginGoogle>
        <AuthForm />
      </StyledFormWrapper>
    </>
  );
};

export default SignupPage;
