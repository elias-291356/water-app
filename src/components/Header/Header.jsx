import React from "react";
import Logo from "../Logo/Logo";
import UserAuth from "../UserAuth/UserAuth";
import { StyledHeaderList } from "./HeaderStyled.js";

const Header = () => {
  return (
    <header>
      <nav>
        <StyledHeaderList>
          <Logo />
          <UserAuth />
        </StyledHeaderList>
      </nav>
    </header>
  );
};

export default Header;
