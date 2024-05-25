import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

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
  StyledWrapPosition,
  StyledDailyNorma,
  // StyledTypography,
  StyledSvgAddWatter,
  StyledWaterSlider,
  StyledDay,
  StyledCalendarWater,
  StyledSectionsWrapper,
  StyledEditWatter,
  StyledButtonEdit,
  StyledWrapSliderAndButton,
  StyledSectionHomePage,
} from "./HomePageStyled";
import DailyNorma from "../../modals/DailyNorma/DailyNorma";
import { useState } from "react";
import { selectMyWaterNorma } from "../../redux/selectors";
import { useSelector } from "react-redux";
import TodayListModal from "../../modals/TodayListModal/TodayListModal";
import DeleteEntry from "../../modals/DeleteEntry/DeleteEntry";
import AddWaterModal from "../../modals/AddWaterModal/AddWaterModal";

const HomePage = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const [showModal, setShowModal] = useState(false);
  const [showTodayListModal, setShowTodayListModal] = useState(false);
  const [showDeleteEntryModal, setShowDeleteEntryModal] = useState(false);
  const [showAddWaterModal, setShowAddWaterModal] = useState(false);
  const myWaterNorma = useSelector(selectMyWaterNorma);
  const MAX = 100;
  const MIN = 0;
  const MEDIUM = 50;
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };
  const marks = [{ value: MIN }, { value: MEDIUM }, { value: MAX }];

  const openEditModal = () => {
    setShowModal(true);
  };

  const closeEditModal = () => {
    setShowModal(false);
  };
  const openTodayListModal = () => {
    setShowTodayListModal(true);
  };

  const closeTodayListModal = () => {
    setShowTodayListModal(false);
  };
  const openDeleteModal = () => {
    setShowDeleteEntryModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteEntryModal(false);
  };
  const openAddWaterModal = () => {
    setShowAddWaterModal(true);
  };

  const closeAddWaterModal = () => {
    setShowAddWaterModal(false);
  };
  return (
    <StyledSectionsWrapper>
      <StyledSectionHomePage>
        <StyledDailyNorma>
          <StyledTitle>My daily norma</StyledTitle>
          <StyledEditWatter>
            <StyledCountWatter>
              {myWaterNorma ? `${myWaterNorma} L` : "1.5 L"}
            </StyledCountWatter>
            <StyledButtonEdit type="button" onClick={openEditModal}>
              Edit
            </StyledButtonEdit>
          </StyledEditWatter>
        </StyledDailyNorma>
        <StyledWrapPosition>
          <StyledBannerSvg>
            <use href={`${sprite}#icon-background-bottle`}></use>
          </StyledBannerSvg>
        </StyledWrapPosition>
        <StyledWaterSlider>
          <StyledDay>Today</StyledDay>
          <StyledWrapSliderAndButton>
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
                  width: isTablet ? "370px" : "270px",
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
                  sx={{
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
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
              <StyledButtonAddWater type="button">
                Add Water
              </StyledButtonAddWater>
            </StyledWrapWatterButton>
          </StyledWrapSliderAndButton>
        </StyledWaterSlider>
        <DailyNorma show={showModal} close={closeEditModal} />
        {/* // ==================================================/// */}
      </StyledSectionHomePage>
      <StyledCalendarWater>
        {" "}
        <TodayListModal show={showTodayListModal} close={closeTodayListModal} />
        <DeleteEntry show={showDeleteEntryModal} close={closeDeleteModal} />
        <AddWaterModal show={showAddWaterModal} close={closeAddWaterModal} />
        <button type="button" onClick={openTodayListModal}>
          open TodayListModal
        </button>
        <button type="button" onClick={openDeleteModal}>
          open TDeleteEntry
        </button>
        <button type="button" onClick={openAddWaterModal}>
          open add water modal
        </button>{" "}
      </StyledCalendarWater>
    </StyledSectionsWrapper>
  );
};

export default HomePage;
