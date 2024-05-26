import React from "react";

import sprite from "../../images/sprite.svg";
import AddWaterModal from "../../modals/AddWaterModal/AddWaterModal";
import {
  StyledSvg,
  StyledSvgBlock,
  StyledSvgCreate,
  StyledWaterTime,
  StyledWrapCounTime,
} from "../../pages/HomePage/HomePageStyled";
import { useState } from "react";
import {
  StyledFixedButton,
  StyledMuiList,
  StyledWrapperList,
  StylledWrapperButton,
  StyledSvgInButton,
  StyledWrapSvgButton,
  StyledListSubheader,
  StyledListItem,
} from "./ScrollListStyled";
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
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <StyledListSubheader>{`Monday ${sectionId}`}</StyledListSubheader>
              {[0, 1, 2].map((item) => (
                // <ListItem key={`item-${sectionId}-${item}`}>
                <StyledListItem key={`item-${sectionId}-${item}`}>
                  <StyledWaterTime>
                    <StyledSvg>
                      <use href={`${sprite}#icon-glass`}></use>
                    </StyledSvg>
                    <StyledWrapCounTime>
                      <p>250 ml</p>
                      <p>7:00 AM</p>
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
                // </ListItem>
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
