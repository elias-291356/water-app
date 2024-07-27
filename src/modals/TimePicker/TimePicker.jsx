import * as React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocalTime from "../TodayListModal/LocalTime";
import SvgIcon from "@mui/material/SvgIcon";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const minutes = [];
for (let i = 5; i <= 55; i += 5) {
  minutes.push(i);
}

function getStyles(name, selectedValue, theme) {
  return {
    fontWeight:
      selectedValue === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export default function SingleSelect() {
  const theme = useTheme();
  const [selectedMinute, setSelectedMinute] = React.useState("");

  const handleChange = (event) => {
    setSelectedMinute(event.target.value);
  };

  const createColorBorder = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--secondary-light-sky)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--secondary-blue)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "var(--secondary-blue)",
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            display: "none",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={createColorBorder}>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={selectedMinute}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (!selected) {
              return <LocalTime minutes={new Date().getMinutes()} />;
            }
            return <LocalTime minutes={selected} />;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {minutes.map((minute) => (
            <MenuItem
              key={minute}
              value={minute}
              style={getStyles(minute, selectedMinute, theme)}
            >
              {minute}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}
