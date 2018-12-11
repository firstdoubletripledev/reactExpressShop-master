// import React module from react for JSX
import React from 'react';

// import Header component
import Header from '../../../navigations/Header';

// import Footer component
import Footer from '../../../navigations/Footer';

// import Container component
import Container from './Container';

/**
 *
 *
 * @returns
 */
const UserInfoPage = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

// export component
export default UserInfoPage;
