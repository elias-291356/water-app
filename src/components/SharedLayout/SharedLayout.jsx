import React from "react";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <WelcomePage />
    </>
  );
};

export default SharedLayout;
