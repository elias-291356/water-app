import React from "react";
import Modal from "../Modal/Modal";
import {
  StyledSection,
  StyledSvg,
  StyledWaterTime,
  StyledWrapCounTime,
  StyledWrapperLabels,
  StyledWrapperInputes,
  StyledInput,
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
} from "./TodayListModalStyled";
import sprite from "../../images/sprite.svg";
const TodayListModal = ({ show, close }) => {
  return (
    <Modal show={show} close={close} title="Edit the entered amount of water">
      <StyledSection>
        <div>
          <div>
            <StyledWrapContainer>
              <StyledWaterTime>
                <StyledSvg>
                  <use href={`${sprite}#icon-glass`}></use>
                </StyledSvg>
                <StyledWrapCounTime>
                  <p>250 ml</p>
                  <p>7:00 AM</p>
                </StyledWrapCounTime>
              </StyledWaterTime>
              <StyledCorrectData>
                <StyledSubtitle>Correct entered data:</StyledSubtitle>
                <StyledWrappButtons>
                  <StyledButton>
                    <StyledSvgPlusMinus>
                      <use href={`${sprite}#icon-minus`}></use>
                    </StyledSvgPlusMinus>
                  </StyledButton>
                  <StyledCountOfWater>250ml</StyledCountOfWater>
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
                  <StyledInput type="text" placeholder="250" />
                </StyledWrapperLabels>
              </StyledWrapperInputes>
              <StyledButtonAndCountOfWater>
                <StyledWaterAmount>250 ml</StyledWaterAmount>
                <StyledSaveButton>save</StyledSaveButton>
              </StyledButtonAndCountOfWater>
            </StyledWrapContainer>
          </div>
        </div>
      </StyledSection>
    </Modal>
  );
};

export default TodayListModal;
