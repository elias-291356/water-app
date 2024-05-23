import React from "react";
import Box from "@mui/material/Box";
import sprite from "../../images/sprite.svg";
import Typography from "@mui/material/Typography";
import {
  StyledBox,
  StyledButtonAddWater,
  StyledWrapWatterButton,
  StyledSlider,
  StyledSvgAddWatter,
  StyledBanner,
} from "./HomePageStyled";
const HomePage = () => {
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
  return (
    <section>
      <div>
        <h2>My daily norma</h2>
        <div>
          <p>1.5L</p>
          <p>Edit</p>
        </div>
      </div>
      <StyledBanner></StyledBanner>
      <div>
        <p>Today</p>
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
              width: "280px",
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
              sx={{ cursor: "pointer" }}
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
      </div>
    </section>
  );
};

export default HomePage;
