import React from "react";
import WaterСonsumptionTracker from "../../components/WaterСonsumptionTracker/WaterСonsumptionTracker";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater";
import { WelcomePageMainWrapper } from "./WelcomePageStyled";
const WelcomePage = () => {
  return (
    <WelcomePageMainWrapper>
      <WaterСonsumptionTracker />
      <WhyDrinkWater />
    </WelcomePageMainWrapper>
  );
};

export default WelcomePage;
