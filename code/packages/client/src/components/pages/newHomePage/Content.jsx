// import React module from react for JSX
import React from 'react';

// import Breadcrumb component
import { Breadcrumb } from './Breadcrumb';

// import CustomModule component
import { CustomModule } from './CustomModule';

// import SubmitNews component
import { SubmitNews } from './SubmitNews';

// import TopColumn component
import { TopColumn } from './TopColumn';

// import UniqueCompoent component
import { UniqueCompoent } from './UniqueCompoent';

/**
 *
 *
 * @param {*} { history }
 * @returns
 */
function Content({ history }) {
  return (
    <section id="wrapper">
      <Breadcrumb />
      <div id="content-wrapper">
        <section id="main">
          <TopColumn history={history} />
          <section id="content" className="page-home">
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

// export component
export { Content };
