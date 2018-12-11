// import React module from react for JSX
import React from 'react';

// import Header component
import Header from '../../../navigations/Header';

// import Footer component
import Footer from '../../../navigations/Footer';

// import Container component
import ContainerUser from './ContainerUser';

/**
 *
 *
 * @returns
 */
const UserOrdersPage = () => {
  return (
    <>
      <Header />
      <ContainerUser />
      <Footer />
    </>
  );
};

// export component
export default UserOrdersPage;
