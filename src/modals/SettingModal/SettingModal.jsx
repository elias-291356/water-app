import React, { useState } from "react";
import Modal from "../Modal/Modal";
import sprite from "../../images/sprite.svg";
import { useForm } from "react-hook-form";

import {
  StyledGenderRadioButtons,
  StyledInputConfirmRepeat,
  StyledInputInputModal,
  StyledInputPasswordNew,
  StyledInputPasswordOutdated,
  StyledItemSvgAndButton,
  StyledLabelModal,
  StyledModalForm,
  StyledSubtitleModal,
  StyledUploadUserPhoto,
  StyledUploadUserPhotoSvg,
  StyledUserPhotoItem,
  StyledUserPhotoWrap,
  StyledWrapInputNew,
  StyledWrapInputOutdated,
  StyledWrapInputRepeat,
  StyledGenderHuman,
  StyledModalFormButton,
  StyledWrapPasswords,
  StyledWrapEmailAndName,
  StyledSubTitle,
  StyledGenderIdentityWrap,
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
          {/* 



 */}

          <StyledModalForm onSubmit={handleSubmit(onSubmit)}>
            <StyledGenderIdentityWrap>
              <StyledSubTitle>Your gender identity</StyledSubTitle>
              <StyledGenderRadioButtons>
                <StyledGenderHuman>
                  <StyledLabelModal>Man</StyledLabelModal>
                  <input
                    name="gender"
                    type="radio"
                    value="Man"
                    {...register("gender", {
                      required: true,
                    })}
                  />
                </StyledGenderHuman>

                <StyledGenderHuman>
                  <StyledLabelModal>Woman</StyledLabelModal>
                  <input
                    name="gender"
                    type="radio"
                    value="Woman"
                    {...register("gender", {
                      required: true,
                    })}
                  />
                </StyledGenderHuman>
              </StyledGenderRadioButtons>

              {/*
               */}
              <StyledWrapEmailAndName>
                <StyledLabelModal>Your name</StyledLabelModal>
                <StyledInputInputModal
                  name="username"
                  type="text"
                  placeholder="David"
                  {...register("username", {
                    required: true,
                  })}
                />
                <StyledLabelModal>Your email</StyledLabelModal>
                <StyledInputInputModal
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  {...register("email", {
                    required: true,
                  })}
                />
              </StyledWrapEmailAndName>
            </StyledGenderIdentityWrap>
            <StyledWrapPasswords>
              {/* <h3>Password</h3> */}
              <StyledSubTitle>Password</StyledSubTitle>
              <p>Outdated password:</p>
              <StyledWrapInputOutdated>
                <StyledInputPasswordOutdated
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
              </StyledWrapInputOutdated>

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
              <StyledWrapInputRepeat>
                <StyledInputConfirmRepeat
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
              </StyledWrapInputRepeat>
            </StyledWrapPasswords>
            <StyledModalFormButton type="submit">Submit</StyledModalFormButton>
          </StyledModalForm>
        </div>
      </Modal>
    </div>
  );
};

export default SettingModal;
