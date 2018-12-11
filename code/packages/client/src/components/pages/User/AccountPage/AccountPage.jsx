// import React module from react for JSX
import React from 'react';

// import Header component
import Header from '../../../navigations/Header.jsx';

// import Footer component
import Footer from '../../../navigations/Footer.jsx';

/**
 *
 *
 * @returns
 */
const AccountPage = () => {
  return (
    <>
      <Header />
      <div className="page-my-account">
        <div id="content-wrapper" className="container">
          <section id="main">
            <header className="page-header">
              <h1>Your account</h1>
            </header>
            <section id="content" className="page-content">
              <aside id="notifications">
                <div className="container" />
              </aside>
              <div className="row">
                <div className="links">
                  <a
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    id="identity-link"
                    href="/userinfo"
                  >
                    <span className="link-item">
                      <i className="material-icons"></i>
                      Information
                    </span>
                  </a>

                  <a
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    id="history-link"
                    href="userorders"
                  >
                    <span className="link-item">
                      <i className="material-icons"></i>
                      Order history and details
                    </span>
                  </a>

                  <a
                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?fc=module&module=tmheaderaccount&controller=facebooklink&id_lang=1"
                    title="Facebook Login Manager"
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <span className="link-item">
                      <i className="facebook" />
                      Connect With Facebook{' '}
                    </span>
                  </a>
                  <a
                    href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?fc=module&module=tmheaderaccount&controller=googlelogin&id_lang=1"
                    title="Google Login Manager"
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <span className="link-item">
                      <i className="googleplus" />
                      Connect With Google{' '}
                    </span>
                  </a>
                </div>
              </div>
            </section>
            <div className="text-sm-center">
              <a
                className="btn btn-sm btn-default"
                href="https://ld-prestashop.template-help.com/prestashop_13106/index.php?mylogout="
              >
                Sign out
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

// export component
export default AccountPage;
