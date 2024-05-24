import React, { useRef } from "react";
import Box from "@mui/material/Box";
import sprite from "../../images/sprite.svg";
import Typography from "@mui/material/Typography";
import {
  StyledBox,
  StyledTitle,
  StyledButtonAddWater,
  StyledWrapWatterButton,
  StyledSlider,
  StyledCountWatter,
  StyledBannerSvg,
  StyledDailyNorma,
  StyledSvgAddWatter,
  StyledWaterSlider,
  StyledDay,
  StyledEditWatter,
  StyledButtonEdit,
  StyledSectionHomePage,
} from "./HomePageStyled";
import DailyNorma from "../../modals/DailyNorma/DailyNorma";
import { useState } from "react";
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const MAX = 100;
  const MIN = 0;
  const MEDIUM = 50;
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
  const marks = [
    {
      value: MIN,
      // label: "0%",
    },
    {
      value: MEDIUM,
      // label: "0%",
    },
    {
      value: MAX,
      // label: "100%",
    },
  ];

  const openEditModal = () => {
    setShowModal(true);
  };

  const closeEditModal = () => {
    setShowModal(false);
  };
  return (
    <StyledSectionHomePage>
      <StyledDailyNorma>
        <StyledTitle>My daily norma</StyledTitle>
        <StyledEditWatter>
          <StyledCountWatter>2.0L</StyledCountWatter>
          <StyledButtonEdit type="button" onClick={openEditModal}>
            Edit
          </StyledButtonEdit>
        </StyledEditWatter>
      </StyledDailyNorma>
      <StyledBannerSvg>
        <use href={`${sprite}#icon-background-bottle`}></use>
      </StyledBannerSvg>
      <StyledWaterSlider>
        <StyledDay>Today</StyledDay>
        <StyledBox>
          <StyledSlider
            marks={marks}
            step={1}
            value={val}
            valueLabelDisplay="auto"
            min={MIN}
            max={MAX}
            onChange={handleChange}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "270px",
            }}
          >
            <Typography
              variant="body2"
              onClick={() => setVal(MIN)}
              sx={{ cursor: "pointer" }}
            >
              {MIN} %
            </Typography>
            <Typography
              variant="body2"
              onClick={() => setVal(MEDIUM)}
              sx={{ cursor: "pointer", fontSize: "16px", fontWeight: "500" }}
            >
              {MEDIUM} %
            </Typography>
            <Typography
              variant="body2"
              onClick={() => setVal(MAX)}
              sx={{ cursor: "pointer" }}
            >
              {MAX} %
            </Typography>
          </Box>
        </StyledBox>
        <StyledWrapWatterButton>
          <StyledSvgAddWatter>
            <use href={`${sprite}#icon-add-watter`}></use>
          </StyledSvgAddWatter>
          <StyledButtonAddWater type="button">Add Water</StyledButtonAddWater>
        </StyledWrapWatterButton>
      </StyledWaterSlider>
      <DailyNorma show={showModal} close={closeEditModal} />
    </StyledSectionHomePage>
  );
};

export default HomePage;
