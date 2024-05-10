import React from "react";
import Logo from "../Logo/Logo";
import UserAuth from "../UserAuth/UserAuth";
import { StyledHeader, StyledHeaderList } from "./HeaderStyled.js";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledHeaderList>
          <Logo />
          <UserAuth />
        </StyledHeaderList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
