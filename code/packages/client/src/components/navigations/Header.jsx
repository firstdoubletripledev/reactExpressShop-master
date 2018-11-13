import { MenuHeader } from "./Header/MenuHeader";
import { HeaderNav } from "./Header/HeaderNav";
import { TopTitle } from "./Header/TopTitle";
import React from "react";
import themeLogo from "./theme-logo.jpg";

const Header = () => {
  return (
    <header id="header">
      <TopTitle />
      <HeaderNav themeLogo={themeLogo} />
      <MenuHeader />
    </header>
  );
};

export default Header;
