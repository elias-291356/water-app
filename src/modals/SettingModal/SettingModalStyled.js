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
  width: 280px;
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
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledInputPasswordNew = styled.input`
  border-radius: 6px;
  padding: 12px 10px;
  width: 280px;
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
