import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  StyledDateCalendar,
  StyledPickersCalendarHeader,
  // StyledButtonBase,
  // StyledPickersDay,
} from "./CalendarStyled";
// import ButtonBase from "@mui/material/ButtonBase/ButtonBase";

import styled, { ThemeProvider } from "styled-components";
import { unstable_styleFunctionSx } from "@mui/system";
import { createTheme } from "@mui/material/styles";
const theme = createTheme();

// const Div = styled("div")(unstable_styleFunctionSx);
const Calendar = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      {/* <Div sx={{ m: 1, p: 1, border: 1 }}>Custom component with the sx prop</Div> */}
      {/* </ThemeProvider> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDateCalendar
          components={{
            CalendarHeader: StyledPickersCalendarHeader,
            // ButtonBase: StyledButtonBase,
            // PickersDay: StyledPickersDay,
            // Day: (props) => (
            //   <ThemeProvider theme={theme}>
            //     <ButtonBase
            //       {...props}
            //       sx={{ width: 30, height: 30, border: 1 }}
            //     />
            //   </ThemeProvider>
            // ),
          }}
        />
        {/* <ButtonBase
          sx={{
            width: 30,
            height: 30,
            border: 2,
            backgroundColor: " #353585",
          }}
        /> */}
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
