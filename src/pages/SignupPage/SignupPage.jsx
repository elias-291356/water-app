import React, { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import sprite from "../../images/sprite.svg";

import {
  StyledAuthButton,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledLabel,
  StyledSigninLink,
  StyledSignUpTitle,
  StyledSvgIconHide,
  StyledWrapInput,
  ErrorMessage,
} from "./SignupPageStyled";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    console.log(data);

    // dispatch(registerThunk(data));
    reset();
  };

  const validatePassword = (value) => {
    const hasNumber = /\d/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);

    const isValid =
      hasNumber &&
      hasLowerCase &&
      hasUpperCase &&
      hasSpecialChar &&
      value.length >= 6;

    if (!isValid) {
      setPasswordError(
        "Password must contain at least one number, one lowercase letter, one uppercase letter, and one special character."
      );
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <>
      <Header />
      <StyledFormWrapper>
        <StyledSignUpTitle>Sign Up</StyledSignUpTitle>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <StyledLabel>Enter your email</StyledLabel>
          </div>
          <div>
            <StyledInput
              name="email"
              required
              type="email"
              placeholder="E-mail"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <StyledLabel>Enter your password</StyledLabel>
          </div>
          <StyledWrapInput>
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                validate: validatePassword,
              })}
            />
            <StyledSvgIconHide>
              <use href={`${sprite}#icon-hide`}></use>
            </StyledSvgIconHide>
          </StyledWrapInput>
          <ErrorMessage>{passwordError}</ErrorMessage>
          <div>
            <StyledLabel>Repeat password</StyledLabel>
          </div>
          <StyledWrapInput>
            <StyledInput
              name="confirmPassword"
              type="password"
              placeholder="Repeat password"
              minLength={6}
              {...register("confirmPassword", { required: true })}
            />
            <StyledSvgIconHide>
              <use href={`${sprite}#icon-hide`}></use>
            </StyledSvgIconHide>
          </StyledWrapInput>
          <StyledAuthButton type="submit">Sign Up</StyledAuthButton>
        </StyledForm>
        <StyledSigninLink to="/sign-in">Sign In</StyledSigninLink>
        <AuthForm />
      </StyledFormWrapper>
    </>
  );
};

export default SignupPage;
