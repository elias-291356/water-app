import React from "react";
import {
  StyledBannerSvg,
  StyledDescrList,
  StyledDescrSection,
  StyledDescrWhy,
  StyledItemWhy,
  // StyledWrapperSvg,
} from "./WhyDrinkWaterStyled";
import sprite from "../../images/sprite.svg";
import { useMediaQuery } from "react-responsive";

const WhyDrinkWater = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <StyledDescrSection>
      <StyledDescrList>
        <StyledDescrWhy>Why drink water</StyledDescrWhy>
        <StyledItemWhy>Supply of nutrients to all organs</StyledItemWhy>
        <StyledItemWhy>Providing oxygen to the lungs</StyledItemWhy>
        <StyledItemWhy>Maintaining the work of the heart</StyledItemWhy>
        <StyledItemWhy>Release of processed substances</StyledItemWhy>
        <StyledItemWhy>
          Ensuring the stabiStyledItemWhyty of the internal environment
        </StyledItemWhy>
        <StyledItemWhy>Maintaining within the normal temperature</StyledItemWhy>
        <StyledItemWhy>
          Maintaining an immune system capable of resisting disease
        </StyledItemWhy>
      </StyledDescrList>
      {/* <StyledWrapperSvg> */}
      {isTablet ? (
        <StyledBannerSvg>
          <use href={`${sprite}#icon-background-bottle`}></use>
        </StyledBannerSvg>
      ) : null}
      {/* </StyledWrapperSvg> */}
    </StyledDescrSection>
  );
};

export default WhyDrinkWater;
