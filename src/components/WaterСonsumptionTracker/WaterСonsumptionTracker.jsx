import React from "react";
import { useNavigate } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import {
  StyledButtonTracker,
  StyledItem,
  StyledListName,
  StyledListTolls,
  StyledSectionBanner,
  StyledSvgTracker,
  StyledSybTitle,
  StyledTitle,
} from "./WaterСonsumptionTrackerStyled";

const WaterСonsumptionTracker = () => {
  const navigate = useNavigate();
  const onClickToSignupPage = () => {
    navigate("/sign-up");
  };

  return (
    <StyledSectionBanner>
      <StyledTitle>Water consumption tracker</StyledTitle>
      <StyledSybTitle>Record daily water intake and track</StyledSybTitle>
      <StyledListName>Tracker Benefits</StyledListName>
      <StyledListTolls>
        <StyledItem>
          <StyledSvgTracker>
            <use href={`${sprite}#icon-calendar`}></use>
          </StyledSvgTracker>
          Habit drive
        </StyledItem>
        <StyledItem>
          <StyledSvgTracker>
            <use href={`${sprite}#icon-chart`}></use>
          </StyledSvgTracker>
          View statistics
        </StyledItem>
        <StyledItem>
          <StyledSvgTracker>
            <use href={`${sprite}#icon-tools`}></use>
          </StyledSvgTracker>
          Personal rate setting
        </StyledItem>
      </StyledListTolls>
      <StyledButtonTracker type="button" onClick={onClickToSignupPage}>
        Try tracker
      </StyledButtonTracker>
    </StyledSectionBanner>
  );
};

export default WaterСonsumptionTracker;
