import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { sliderClasses } from "@mui/material/Slider";

export const StyledBox = styled(Box)`
  width: 256px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledButtonAddWater = styled.button`
  /* position: relative; */
  border-radius: 10px;
  padding-left: 20px;
  /* padding-top: 6px;
  padding-bottom: 6px; */
  width: 280px;
  height: 40px;
  border: none;
  background-color: var(--primary-blue);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primary-white);
`;
export const StyledSvgAddWatter = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: none;
  stroke: var(--primary-white);
  top: 7px;
  left: 75px;
`;
export const StyledBanner = styled.div`
  background-image: url("src/images/bottle-bcg-mob-min.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 300px;
`;
export const StyledWrapWatterButton = styled.div`
  position: relative;
`;
export const StyledSlider = styled(Slider)(
  () => `
  .${sliderClasses.thumb} {

    width: 14px;
    height: 14px;
    border: 2px solid ;
    border-color: var(--primary-blue);
    background-color: var(--primary-white);
   
  }

  .${sliderClasses.track} {

  height: 8px;
  background-color: var(--secondary-blue);
  }
  .${sliderClasses.rail} {
  height: 6px;
  background-color:  var(--secondary-light-sky);
  opacity:1;

  }
  .${sliderClasses.mark} {
    width: 0px;
  }
  .${sliderClasses.valueLabel} {
      background-color: transparent;
      //  background-color:  var(--secondary-light-sky);
      color:var(--secondary-blue);
      font-size:12px;

  }
  .${sliderClasses.valueLabelCircle} {
      background-color: transparent;
      //  background-color:  var(--secondary-light-sky);
      color:var(--secondary-blue);
      font-size:12px;
     

  }
  
 

`
);
