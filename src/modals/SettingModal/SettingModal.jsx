import React, { useState } from "react";
import Modal from "../Modal/Modal";
import sprite from "../../images/sprite.svg";
import { useForm } from "react-hook-form";

import {
  StyledInputInputModal,
  StyledInputPasswordNew,
  StyledItemSvgAndButton,
  StyledLabelModal,
  StyledModalForm,
  StyledSubtitleModal,
  StyledUploadUserPhoto,
  StyledUploadUserPhotoSvg,
  StyledUserPhotoItem,
  StyledUserPhotoWrap,
  StyledWrapInputNew,
} from "./SettingModalStyled";
import {
  StyledInputConfirm,
  StyledInputPassword,
  StyledSvgIconShowPassword,
  StyledWrapInput,
} from "../../pages/SignupPage/SignupPageStyled";
const SettingModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleModal = () => setModal(!modal);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPassVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Modal</button>
      <Modal show={modal} close={toggleModal}>
        <StyledSubtitleModal>Your photo</StyledSubtitleModal>
        <StyledUserPhotoWrap>
          <StyledUserPhotoItem>
            <img src="" alt="" />
          </StyledUserPhotoItem>
          <StyledItemSvgAndButton>
            <StyledUploadUserPhotoSvg>
              <use href={`${sprite}#icon-upload`}></use>
            </StyledUploadUserPhotoSvg>
            <StyledUploadUserPhoto type="button">
              Upload a photo
            </StyledUploadUserPhoto>
          </StyledItemSvgAndButton>
        </StyledUserPhotoWrap>
        <div>
          <h2>Your gender identity</h2>
          <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                name="gender"
                type="radio"
                value="Man"
                {...register("gender", {
                  required: true,
                })}
              />
              <StyledLabelModal>Man</StyledLabelModal>

              <input
                name="gender"
                type="radio"
                value="Woman"
                {...register("gender", {
                  required: true,
                })}
              />
              <StyledLabelModal>Woman</StyledLabelModal>
              <StyledLabelModal>Enter your name</StyledLabelModal>
              <StyledInputInputModal
                name="username"
                type="text"
                placeholder="David"
                {...register("username", {
                  required: true,
                })}
              />
              <StyledLabelModal>Enter your email</StyledLabelModal>
              <StyledInputInputModal
                name="email"
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: true,
                })}
              />
            </div>
            <div>
              <StyledLabelModal>Password</StyledLabelModal>
              <p>Outdated password:</p>
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
              <p>New password:</p>
              <StyledWrapInputNew>
                <StyledInputPasswordNew
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("newPassword", {})}
                />
                <StyledSvgIconShowPassword onClick={toggleNewPassword}>
                  <use
                    href={`${sprite}#icon-${showNewPassword ? "show" : "hide"}`}
                  ></use>
                </StyledSvgIconShowPassword>
              </StyledWrapInputNew>
              <p>Repeat new password:</p>
              <StyledWrapInput>
                <StyledInputConfirm
                  // $isValidBorderConfirm={isValidBorderConfirm}
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("confirmPassword")}
                />
                <StyledSvgIconShowPassword
                  onClick={toggleConfirmPassVisibility}
                >
                  <use
                    href={`${sprite}#icon-${
                      showConfirmPassword ? "show" : "hide"
                    }`}
                  ></use>
                </StyledSvgIconShowPassword>
              </StyledWrapInput>
            </div>
            <button type="submit">Submit</button>
          </StyledModalForm>
        </div>
      </Modal>
    </div>
  );
};

export default SettingModal;
