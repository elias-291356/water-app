import React from "react";
import WaterСonsumptionTracker from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import {
  // StyledBacgroundWrap,
  StyledWelcomePageMainWrapper,
} from "./WelcomePageStyled";
const WelcomePage = () => {
  return (
    <StyledWelcomePageMainWrapper>
      {/* <StyledBacgroundWrap> */}
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
      {/* </StyledBacgroundWrap> */}
    </StyledWelcomePageMainWrapper>
  );
};

export default WelcomePage;
