import { styled } from "styled-components";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { dateCalendarClasses } from "@mui/x-date-pickers/DateCalendar/dateCalendarClasses";
import { dayPickerClasses } from "@mui/x-date-pickers/DateCalendar/dayCalendarClasses";

import { PickersCalendarHeader } from "@mui/x-date-pickers/PickersCalendarHeader";
import { pickersCalendarHeaderClasses } from "@mui/x-date-pickers/PickersCalendarHeader/pickersCalendarHeaderClasses";

export const StyledDateCalendar = styled(DateCalendar)`
  &.${dateCalendarClasses.root} {
    width: 280px;
    background-color: var(--secondary-light-blue);
  }
  .${dayPickerClasses.header} {
    display: none;
  }
`;
export const StyledPickersCalendarHeader = styled(PickersCalendarHeader)`
  &.${pickersCalendarHeaderClasses.root} {
    display: none;
  }
`;
