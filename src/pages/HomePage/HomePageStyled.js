import styled from "styled-components";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { sliderClasses } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export const StyledBox = styled(Box)`
  width: 256px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    width: 356px;
  }

  @media screen and (min-width: 1280px) {
  }
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
  @media screen and (min-width: 1280px) {
    width: 178px;
  }
`;
export const StyledSvgAddWatter = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;

  fill: none;
  stroke: var(--primary-white);
  top: 7px;
  left: 75px;
  @media screen and (min-width: 1280px) {
    left: 25px;
  }
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
  z-index: -1;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0px;
    width: 520px;
    height: 390px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledWrapPosition = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    width: 520px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledDailyNorma = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 12px;
  justify-content: space-between;
  border: 2px solid var(--secondary-light-sky);
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
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
  }
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
  padding: 4px;
  cursor: pointer;
  /* z-index: 1; */
  @media screen and (min-width: 768px) {
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    cursor: pointer;
  }
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledDay = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    /* font-weight: 500; */
    font-size: 19px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const StyledWrapSliderAndButton = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
  }
`;
export const StyledCalendarWater = styled.section`
  border-radius: 10px;
  width: 280px;
  height: 836px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: #ecf2ff;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 688px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
    height: 680px;
  }
`;
export const StyledSectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;
// export const StyledTypography = styled(Typography)`
//   @media screen and (min-width: 768px) {
//     width: 356px;
//   }

//   @media screen and (min-width: 1280px) {
//   }
// `;

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

// ==============calendar

export const StyledWaterTime = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 700px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const StyledSvg = styled.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
  stroke: var(--primary-blue);
`;
export const StyledSvgCreate = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--primary-blue);
`;
export const StyledWrapCounTime = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;
export const StyledSvgBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  & > :nth-child(2) {
    stroke: var(--secondary-red);
  }
`;
