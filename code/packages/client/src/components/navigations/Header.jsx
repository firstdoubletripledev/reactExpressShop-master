import React from 'react';

import { HeaderNav } from './Header/HeaderNav';
import { MenuHeader } from './Header/MenuHeader';
import { TopTitle } from './Header/TopTitle';
import themeLogo from './theme-logo.jpg';

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
