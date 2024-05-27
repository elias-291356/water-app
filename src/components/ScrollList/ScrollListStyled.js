import { styled } from "styled-components";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";

import { listClasses } from "@mui/material/List";
import { listSubheaderClasses } from "@mui/material/ListSubheader";
import { listItemClasses } from "@mui/material/ListItem";
export const StyledMuiList = styled(List)(
  () => `
    &.${listClasses.root} {
      border-radius: 10px;
      background-color: var(--secondary-light-blue);
      overflow-x: hidden; 
      padding: 0; 
      @media screen and (min-width: 768px) {
      max-width: 704px;
      }
      @media screen and (min-width: 1280px) {
      width: 544px;
      }
    }
    
    &.${listClasses.root}::-webkit-scrollbar {
      width: 4px;
    }

    &.${listClasses.root}::-webkit-scrollbar-thumb {
      background-color: var(--secondary-blue);
      border-radius: 10px;
      cursor:pointer;

    }

    &.${listClasses.root}::-webkit-scrollbar-track {
      background: var(--secondary-light-sky);
    }
  `
);
export const StyledListSubheader = styled(ListSubheader)(
  () => `
    &.${listSubheaderClasses.root} {
      background-color: var(--secondary-light-blue);
    }
 
  `
);
export const StyledListItem = styled(ListItem)(
  () => `
    &.${listItemClasses.root} {
      border-bottom: 2px solid var(--secondary-light-sky);
      padding:0px;
         @media screen and (min-width: 768px) {
        width: 650px;
        }
        @media screen and (min-width: 1280px) {
          width:530px;
        }
    }
  `
);

export const StyledFixedButton = styled.button`
  position: absolute;
  display: flex;
  border: none;
  z-index: 2;

  row-gap: 18px;
  padding: 0px;
  left: 0px;
  bottom: 12px;
  font-size: 18px;

  line-height: 1.25;
  font-weight: 500;
  line-height: 1.33;

  color: var(--primary-blue);
  background-color: transparent;
`;
export const StyledWrapperList = styled.div`
  position: relative;
  padding: 20px;
`;
export const StylledWrapperButton = styled.div`
  width: 100%;
  height: 50px;
`;
export const StyledSvgInButton = styled.svg`
  width: 22px;
  height: 22px;

  stroke: var(--primary-blue);
`;
export const StyledWrapSvgButton = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const StyledSvg = styled.svg`
  fill: transparent;

  width: 34px;
  height: 34px;
  stroke-width: 0.5px;

  stroke: var(--primary-blue);
`;
export const StyledCountWater = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33333;

  color: var(--primary-blue);
`;
export const StyledTimeUsed = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
`;
