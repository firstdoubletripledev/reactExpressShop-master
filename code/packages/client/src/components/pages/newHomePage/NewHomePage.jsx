import React from 'react';

import Footer from '../../navigations/Footer';
import Header from '../../navigations/Header';
import { Content } from './Content';

const NewHomePage = ({ history }) => {
  return (
    <>
      <Header />
      <Content history={history} />
      <Footer />
    </>
  );
};

export default NewHomePage;
