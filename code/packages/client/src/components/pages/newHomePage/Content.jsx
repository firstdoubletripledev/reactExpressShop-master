// import { PopularProducts } from "./PopularProducts";
import { CustomModule } from "./CustomModule";
import { UniqueCompoent } from "./UniqueCompoent";
import { SubmitNews } from "./SubmitNews";
import { TopColumn } from "./TopColumn";
import { Breadcrumb } from "./Breadcrumb";
import React from "react";

export function Content({history}) {
  return (
    <section id="wrapper">
      <Breadcrumb />
      <div id="content-wrapper">
        <section id="main">
          <TopColumn history={history} />
          <section id="content" className="page-home">
            {/* <PopularProducts /> */}
            <CustomModule />
            <UniqueCompoent />
            <SubmitNews />
          </section>
          <footer className="page-footer">{/* Footer content */}</footer>
        </section>
      </div>
    </section>
  );
}
