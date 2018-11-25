import React from 'react';

import Footer from '../../navigations/Footer.jsx';
import Header from '../../navigations/Header.jsx';
import Container from './Container.jsx';

// import MenuNav from "../../navigations/MenuNav.jsx";
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

export default CategoryPage;
