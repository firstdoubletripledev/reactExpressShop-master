// import React module from react for JSX
import React from 'react';

// import Footer component
import Footer from '../../navigations/Footer';

// import Header component
import Header from '../../navigations/Header';

// import Content component
import { Content } from './Content';

/**
 *
 *
 * @param {*} { history }
 * @returns
 */
const NewHomePage = ({ history }) => {
  return (
    <>
      <Header />
      <Content history={history} />
      <Footer />
    </>
  );
};

// export component
export default NewHomePage;
