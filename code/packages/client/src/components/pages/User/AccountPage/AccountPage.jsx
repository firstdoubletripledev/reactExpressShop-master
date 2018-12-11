import Axios from 'axios';

// import React module from react for JSX
import React from 'react';

import { Link } from 'react-router-dom';

// import Header component
import Header from '../../../navigations/Header';

// import Footer component
import Footer from '../../../navigations/Footer';

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
                  <Link
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    id="identity-link"
                    to="/userinfo"
                  >
                    <span className="link-item">
                      <i className="material-icons"></i>
                      Information
                    </span>
                  </Link>

                  <Link
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    id="history-link"
                    to="userorders"
                  >
                    <span className="link-item">
                      <i className="material-icons"></i>
                      Order history and details
                    </span>
                  </Link>

                  <Link
                    to="#0"
                    title="Facebook Login Manager"
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <div id="outer-box">
                      <span className="link-item">
                        <i className="facebook" />
                        Connect With Facebook{' '}
                      </span>
                      <div id="inner-box">
                        <p>Coming Soon!</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="#0"
                    title="Google Login Manager"
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                  >
                    <div id="outer-box">
                      <span className="link-item">
                        <i className="googleplus" />
                        Connect With Google{' '}
                      </span>{' '}
                      <div id="inner-box">
                        <p>Coming Soon!</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
            <div className="text-sm-center">
              <a
                className="btn btn-sm btn-default"
                href="#0"
                onClick={async () => {
                  await Axios.get('/api/users/logout').catch(error => {
                    return console.log(error.response);
                  });
                  localStorage.removeItem('token');
                  window.location.href = '/';
                }}
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
