import { Content } from "./Content";
import React from "react";
import Header from "../../navigations/Header";
import Footer from "../../navigations/Footer";

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
