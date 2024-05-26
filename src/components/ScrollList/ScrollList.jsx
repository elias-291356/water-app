import React from "react";
import { useState } from "react";
import sprite from "../../images/sprite.svg";
import {
  StyledFixedButton,
  StyledMuiList,
  StyledWrapperList,
  StylledWrapperButton,
  StyledSvgInButton,
  StyledWrapSvgButton,
  StyledListSubheader,
  StyledListItem,
  StyledSvg,
  StyledCountWater,
  StyledTimeUsed,
} from "./ScrollListStyled";
import {
  StyledSvgBlock,
  StyledSvgCreate,
  StyledWaterTime,
  StyledWrapCounTime,
} from "../../pages/HomePage/HomePageStyled";
import AddWaterModal from "../../modals/AddWaterModal/AddWaterModal";

const ScrollList = () => {
  const [showAddWaterModal, setShowAddWaterModal] = useState(false);

  const openAddWaterModal = () => {
    setShowAddWaterModal(true);
  };

  const closeAddWaterModal = () => {
    setShowAddWaterModal(false);
  };
  return (
    <StyledWrapperList>
      <StyledMuiList
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        <h3>Today</h3>
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <StyledListSubheader>{`Monday ${sectionId}`}</StyledListSubheader>
              {[0, 1, 2].map((item) => (
                <StyledListItem key={`item-${sectionId}-${item}`}>
                  <StyledWaterTime>
                    <StyledWrapCounTime>
                      <StyledSvg>
                        <use href={`${sprite}#icon-glass`}></use>
                      </StyledSvg>
                      <StyledCountWater>250 ml</StyledCountWater>
                      <StyledTimeUsed>7:00 AM</StyledTimeUsed>
                    </StyledWrapCounTime>
                    <StyledSvgBlock>
                      <StyledSvgCreate>
                        <use href={`${sprite}#icon-pen`}></use>
                      </StyledSvgCreate>
                      <StyledSvgCreate>
                        <use href={`${sprite}#icon-trash`}></use>
                      </StyledSvgCreate>
                    </StyledSvgBlock>
                  </StyledWaterTime>
                </StyledListItem>
              ))}
            </ul>
          </li>
        ))}
      </StyledMuiList>
      <StylledWrapperButton>
        <StyledFixedButton type="button" onClick={openAddWaterModal}>
          <StyledWrapSvgButton>
            <StyledSvgInButton>
              <use href={`${sprite}#icon-plus`}></use>
            </StyledSvgInButton>
          </StyledWrapSvgButton>
          Add water
        </StyledFixedButton>
      </StylledWrapperButton>
      <AddWaterModal show={showAddWaterModal} close={closeAddWaterModal} />
    </StyledWrapperList>
  );
};

export default ScrollList;
