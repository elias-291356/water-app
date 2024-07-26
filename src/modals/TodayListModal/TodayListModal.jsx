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
import { useState } from "react";
// import LocalTime from "./LocalTime";
import TimePicker from "../TimePicker/TimePicker";

// import MultipleSelectPlaceholder from "../TimePicker/TimePicker.jsx";

const TodayListModal = ({ show, close }) => {
  const [selectedValue, setSelectedValue] = useState(50);

  const onClickPlus = () => {
    const options = [0, 50, 100, 250, 500, 750, 1000, 1500];
    const currentIndex = options.indexOf(selectedValue);
    const nextIndex = (currentIndex + 1) % options.length;

    const isNextMax = options[nextIndex] === 1500;
    if (!isNextMax) {
      setSelectedValue(options[nextIndex]);
    }
  };

  const onClickMinus = () => {
    const options = [0, 50, 100, 250, 500, 750, 1000, 1500];
    const currentIndex = options.indexOf(selectedValue);
    const previousIndex = (currentIndex - 1 + options.length) % options.length;

    const isPreviousMin = options[previousIndex] === 0;
    if (!isPreviousMin) {
      setSelectedValue(options[previousIndex]);
    }
  };

  const onClickSelectTime = () => {
    console.log("sdsdsdsd");
  };
  return (
    <Modal show={show} close={close} title="Edit the entered amount of water">
      {/* <MultipleSelectPlaceholder /> */}
      <StyledSection>
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
              <StyledButton onClick={onClickMinus}>
                <StyledSvgPlusMinus>
                  <use href={`${sprite}#icon-minus`}></use>
                </StyledSvgPlusMinus>
              </StyledButton>
              <StyledCountOfWater>{selectedValue}ml</StyledCountOfWater>
              <StyledButton onClick={onClickPlus}>
                <StyledSvgPlusMinus>
                  <use href={`${sprite}#icon-plus`}></use>
                </StyledSvgPlusMinus>
              </StyledButton>
            </StyledWrappButtons>
          </StyledCorrectData>
          <StyledWrapperInputes>
            <StyledWrapperLabels>
              Recording time:
              <TimePicker />
              {/* <LocalTime /> */}
              <StyledInput type="text" onClick={onClickSelectTime} />
            </StyledWrapperLabels>
            <StyledWrapperLabels>
              Enter the value of the water used:
              <StyledInput type="text" placeholder="250" />
            </StyledWrapperLabels>
          </StyledWrapperInputes>
          <StyledButtonAndCountOfWater>
            <StyledWaterAmount>250 ml</StyledWaterAmount>
            <StyledSaveButton>Save</StyledSaveButton>
          </StyledButtonAndCountOfWater>
        </StyledWrapContainer>
      </StyledSection>
    </Modal>
  );
};

export default TodayListModal;
