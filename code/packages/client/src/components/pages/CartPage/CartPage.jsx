// import React module from react for JSX
import React from 'react';

// import Footer component
import Footer from '../../navigations/Footer.jsx';

// import Header component
import Header from '../../navigations/Header.jsx';

// import Container component
import Container from './Container.jsx';

/**
 *
 *
 * @returns
 */
const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

// export component
export default CheckoutPage;
