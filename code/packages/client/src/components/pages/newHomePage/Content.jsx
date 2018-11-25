// import { PopularProducts } from "./PopularProducts";
import React from 'react';

import { Breadcrumb } from './Breadcrumb';
import { CustomModule } from './CustomModule';
import { SubmitNews } from './SubmitNews';
import { TopColumn } from './TopColumn';
import { UniqueCompoent } from './UniqueCompoent';

export function Content({ history }) {
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
