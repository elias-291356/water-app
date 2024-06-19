import { styled } from "styled-components";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { dateCalendarClasses } from "@mui/x-date-pickers/DateCalendar/dateCalendarClasses";
import { dayPickerClasses } from "@mui/x-date-pickers/DateCalendar/dayCalendarClasses";

import { PickersCalendarHeader } from "@mui/x-date-pickers/PickersCalendarHeader";
import { pickersCalendarHeaderClasses } from "@mui/x-date-pickers/PickersCalendarHeader/pickersCalendarHeaderClasses";

// import ButtonBase from "@mui/material/ButtonBase/ButtonBase";
// import buttonBaseClasses from "@mui/material/ButtonBase/buttonBaseClasses";

// import { PickersDay } from "@mui/x-date-pickers/DatePicker/components/PickersDay/PickersDay";
// import { pickersDayClasses } from "@mui/x-date-pickers/DatePicker/components/PickersDay/pickersDayClasses";
import { PickersDay } from "@mui/x-date-pickers/PickersDay/PickersDay";
import { pickersDayClasses } from "@mui/x-date-pickers/PickersDay/pickersDayClasses";

export const StyledDateCalendar = styled(DateCalendar)`
  &.${dateCalendarClasses.root} {
    width: 280px;
    height: 280px;
    background-color: var(--secondary-light-blue);
  }
  .${dayPickerClasses.header} {
    display: none;
  }

  & .MuiButtonBase-root.MuiPickersDay-root.Mui-selected:hover {
    background-color: var(--secondary-orange);
  }
  /* & .MuiButtonBase-root.MuiPickersDay-root:not(.Mui-selected) {
    border: 1px solid red;
  } */
`;
export const StyledPickersCalendarHeader = styled(PickersCalendarHeader)`
  &.${pickersCalendarHeaderClasses.root} {
    display: none;
  }
`;
// export const StyledButtonBase = styled(ButtonBase)`
//   .${buttonBaseClasses.root} {
//     width: 50px;
//     height: 50px;
//     background-color: red;
//     border: 2px solid green;
//     border-radius: 20%;
//   }
// `;
// export const StyledPickersDay = styled(PickersDay)`
//   .${pickersDayClasses.dayWithMargin} {
//     width: 50px;
//     height: 50px;
//     background-color: red;
//     border: 2px solid green;
//     border-radius: 50px;
//     margin-top: 20px;
//   }

//   .${pickersDayClasses.day} {
//     width: 50px;
//     height: 50px;
//     background-color: red;
//     border: 2px solid green;
//     border-radius: 50px;
//   }
// `;
