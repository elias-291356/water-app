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
// export const StyledBannerSvg = styled.div`
/* background-image: url("src/images/bottle-bcg-mob.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 300px; */
// `;
export const StyledBannerSvg = styled.svg`
  width: 280px;
  height: 208px;
`;
export const StyledDailyNorma = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 12px;
  justify-content: space-between;
  border: 1px solid var(--secondary-light-sky);
  border-radius: 10px;
  padding: 8px 20px;
  width: 164px;
  height: 74px;
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.3);
`;
export const StyledEditWatter = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const StyledSectionHomePage = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 280px;
`;
export const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 17px;
  line-height: 1.33333;
  color: var(--primary-black);
`;
export const StyledButtonEdit = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--secondary-blue);
  padding: 0px;
`;
export const StyledCountWatter = styled.p`
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 22px;
  line-height: 1;
`;
export const StyledWrapWatterButton = styled.div`
  position: relative;
`;
export const StyledWaterSlider = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: var(--primary-blue);
`;
export const StyledDay = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
`;

// ===========Library settings
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
