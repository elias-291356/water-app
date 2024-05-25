import React from "react";
import Modal from "../Modal/Modal";
import {
  StyledWrapperLabels,
  StyledWrapperInputes,
  StyledCorrectData,
  StyledSubtitle,
  StyledWrappButtons,
  StyledWrapContainer,
  StyledButton,
  StyledSvgPlusMinus,
  StyledCountOfWater,
  StyledButtonAndCountOfWater,
  StyledSaveButton,
  StyledWaterAmount,
} from "../TodayListModal/TodayListModalStyled";
import sprite from "../../images/sprite.svg";
import { StyledAmount, StyledInput } from "./AddWaterModalStyled";
const AddWaterModal = ({ show, close }) => {
  return (
    <Modal show={show} close={close} title="Add water">
      <StyledWrapContainer>
        <StyledCorrectData>
          <StyledSubtitle>Choose a value:</StyledSubtitle>
          <StyledAmount>Amount of water:</StyledAmount>
          <StyledWrappButtons>
            <StyledButton>
              <StyledSvgPlusMinus>
                <use href={`${sprite}#icon-minus`}></use>
              </StyledSvgPlusMinus>
            </StyledButton>
            <StyledCountOfWater>50ml</StyledCountOfWater>
            <StyledButton>
              <StyledSvgPlusMinus>
                <use href={`${sprite}#icon-plus`}></use>
              </StyledSvgPlusMinus>
            </StyledButton>
          </StyledWrappButtons>
        </StyledCorrectData>
        <StyledWrapperInputes>
          <StyledWrapperLabels>
            Recording time:
            <StyledInput type="text" placeholder="7:00" />
          </StyledWrapperLabels>
          <StyledWrapperLabels>
            Enter the value of the water used:
            <StyledInput type="text" placeholder="50" />
          </StyledWrapperLabels>
        </StyledWrapperInputes>
        <StyledButtonAndCountOfWater>
          <StyledWaterAmount>50 ml</StyledWaterAmount>
          <StyledSaveButton>Save</StyledSaveButton>
        </StyledButtonAndCountOfWater>
      </StyledWrapContainer>
    </Modal>
  );
};

export default AddWaterModal;
