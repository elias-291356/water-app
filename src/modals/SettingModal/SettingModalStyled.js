import { styled } from "styled-components";

export const StyledUploadUserPhoto = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--primary-blue);
  background-color: transparent;
  border: none;
  padding: 0px;
`;
export const StyledUploadUserPhotoSvg = styled.svg`
  width: 16px;
  height: 16px;
`;
export const StyledUserPhotoWrap = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
export const StyledUserPhotoItem = styled.li`
  border-radius: 100%;
  border: 1px solid green;
  width: 90px;
  height: 80px;
`;
export const StyledItemSvgAndButton = styled.li`
  display: flex;
  column-gap: 8px;
`;
export const StyledSubtitleModal = styled.h4`
  padding-bottom: 8px;
`;

export const StyledInputInputModal = styled.input`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  padding: 12px 10px;
  width: 256px;

  height: 44px;
  border-color: var(--secondary-light-sky);

  &::placeholder {
    color: var(--secondary-blue);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }
`;
export const StyledLabelModal = styled.label`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
`;
export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

//=====================

export const StyledWrapInputNew = styled.div`
  position: relative;
  width: 256px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledInputPasswordNew = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;

  height: 44px;
  border: 1px solid
    ${(props) =>
      props.$isValidBorderPassword ? "var(--secondary-light-sky)" : "red"};

  &::placeholder {
    color: var(--secondary-blue);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledWrapInputOutdated = styled.div`
  position: relative;
  width: 256px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledInputPasswordOutdated = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;

  height: 44px;
  border: 1px solid
    ${(props) =>
      props.$isValidBorderPassword ? "var(--secondary-light-sky)" : "red"};

  &::placeholder {
    color: var(--secondary-blue);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;
export const StyledWrapInputRepeat = styled.div`
  position: relative;
  width: 256px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledInputConfirmRepeat = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 256px;

  height: 44px;
  border: 1px solid
    ${(props) =>
      props.$isValidBorderPassword ? "var(--secondary-light-sky)" : "red"};

  &::placeholder {
    color: var(--secondary-blue);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 384px;
  }
`;

// ==========================
export const StyledGenderRadioButtons = styled.div`
  display: flex;
`;
export const StyledGenderHuman = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const StyledModalFormButton = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 256px;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primary-blue);
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-white);
`;
