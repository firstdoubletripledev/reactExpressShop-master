// import React module from react for JSX
import React from 'react';

// import HeaderNav component
import { HeaderNav } from './Header/HeaderNav';

// import MenuHeader component
import { MenuHeader } from './Header/MenuHeader';

// import TopTitle component
import { TopTitle } from './Header/TopTitle';

// import themeLogo image
import themeLogo from './theme-logo.jpg';

/**
 *
 *
 * @returns
 */
const Header = () => {
  return (
    <header id="header">
      <TopTitle />
      <HeaderNav themeLogo={themeLogo} />
      <MenuHeader />
    </header>
  );
};

// export component
export default Header;
