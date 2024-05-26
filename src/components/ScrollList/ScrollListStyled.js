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
      padding-bottom: 30px;
      background-color: var(--secondary-light-blue);

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
      border-bottom: 2px solid var(--secondary-light-sky)

    }

  `
);

// export const StyledMuiList = styled(List)`
//   /* Ваши стили здесь */
//   & {
//     border: 2px solid red;
//     padding: 200px;
//   }
// `;

export const StyledFixedButton = styled.button`
  display: flex;

  border: none;
  background-color: transparent;
  font-weight: 500;
  padding: 0px;
  font-size: 16px;
  line-height: 1.25;
  color: var(--primary-blue);
`;
export const StyledWrapperList = styled.div`
  position: relative;
`;
export const StylledWrapperButton = styled.div`
  position: absolute;
  display: flex;
  row-gap: 8px;
  left: 0px;
  bottom: 0px;
  z-index: 2;
`;
export const StyledSvgInButton = styled.svg`
  width: 18px;
  height: 18px;
  stroke: var(--primary-blue);
`;
export const StyledWrapSvgButton = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
