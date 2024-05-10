import React from "react";
import {
  StyledDescrList,
  StyledDescrSection,
  StyledDescrWhy,
  StyledItemWhy,
} from "./WhyDrinkWaterStyled";

const WhyDrinkWater = () => {
  return (
    <StyledDescrSection>
      <StyledDescrWhy>Why drink water</StyledDescrWhy>
      <StyledDescrList>
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
    </StyledDescrSection>
  );
};

export default WhyDrinkWater;
