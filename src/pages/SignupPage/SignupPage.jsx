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
  StyledInput,
  StyledLabel,
  StyledSigninLink,
  StyledSignUpTitle,
  StyledSvgIconHide,
  StyledWrapInput,
  ErrorMessage,
} from "./SignupPageStyled";

const SignupPage = () => {
  // const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
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
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    if (!isValid) {
      setEmailError("Example of valid email: john@mail.com");
    } else {
      setEmailError("");
    }
    return isValid;
  };
  const validatePassword = (value) => {
    const hasNumber = (value.match(/\d/g) || []).length >= 6;
    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);

    const isValid =
      hasNumber &&
      hasLowerCase &&
      hasUpperCase &&
      hasSpecialChar &&
      value.length >= 6 &&
      value.length <= 16;

    if (!isValid) {
      setPasswordError(
        "Password must contain at least 6 numbers, one lowercase letter, one uppercase letter, and one special character. In summary  9 - 16 symbols"
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
        <ErrorMessage>{emailError}</ErrorMessage>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            name="email"
            required
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: true,
              validate: validateEmail,
            })}
          />
          <StyledLabel>Enter your password</StyledLabel>
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
          <StyledLabel>Repeat password</StyledLabel>
          <StyledWrapInput>
            <StyledInput
              name="confirmPassword"
              type="password"
              placeholder="Repeat password"
              {...register("confirmPassword")}
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
