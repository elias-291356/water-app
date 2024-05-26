import React, { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
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
import {
  StyledALoginGoogle,
  StyledBannerSvgLogin,
  StyledBannerSvgWrapper,
  StyledWrapperSignIn,
  StyledInputInput,
  StyledFormWrapperLogin,
} from "./SigninPageStyled";
import { BASE_URL } from "../../service/api";
import { loginThunk } from "../../redux/thunk";
import { selectIsLogin } from "../../redux/selectors";
import SettingModal from "../../modals/SettingModal/SettingModal";
import { StyledBannerSvg } from "../HomePage/HomePageStyled";
// import { toast } from "react-toastify";
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    dispatch(loginThunk(data));
    console.log(errors);
    reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <StyledWrapperSignIn>
        <StyledFormWrapperLogin>
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
              <StyledInputPassword
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {})}
              />
              <StyledSvgIconShowPassword onClick={togglePasswordVisibility}>
                <use
                  href={`${sprite}#icon-${showPassword ? "show" : "hide"}`}
                ></use>
              </StyledSvgIconShowPassword>
            </StyledWrapInput>

            <StyledAuthButton type="submit">Sign In</StyledAuthButton>
          </StyledForm>
          <StyledSigninLink to="/signup">Sign Up</StyledSigninLink>
          <StyledALoginGoogle href={`${BASE_URL}/api/auth/google`}>
            Login with google
          </StyledALoginGoogle>
          {/* <AuthForm /> */}
        </StyledFormWrapperLogin>
        <StyledBannerSvgWrapper>
          <StyledBannerSvgLogin>
            <use href={`${sprite}#icon-background-bottle`}></use>
          </StyledBannerSvgLogin>
        </StyledBannerSvgWrapper>
        {/* </div> */}

        {/* <SettingModal /> */}
        {/* </div> */}
      </StyledWrapperSignIn>
    </>
  );
};

export default SignupPage;
