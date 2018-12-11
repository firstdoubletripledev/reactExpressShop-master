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
 * @param {*} {
 *   match: {
 *     params: { page = 1, typeevent: typeEvent = null, searchvalue = null },
 *   },
 * }
 * @returns
 */
const CategoryPage = ({
  match: {
    params: { page = 1, typeevent: typeEvent = null, searchvalue = null },
  },
}) => {
  return (
    <>
      <Header />
      <Container page={page} typeEvent={typeEvent} searchvalue={searchvalue} />
      <Footer />
    </>
  );
};

// export component
export default CategoryPage;
