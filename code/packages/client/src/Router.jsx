// import React, PureComponent module from react for JSX and class
import React from 'react';

// import Loadable module from react-loadable for split file build
import Loadable from 'react-loadable';

// import Route module from react-router-dom for router in react
import { Route } from 'react-router-dom';

// import LoadingCompoment
import LoadingCompoment from './components/LoadingCompoment';

// import PrivateRouteAdmin for check role admin
import PrivateRouteAdmin from './PrivateRouteAdmin';

import PrivateRoute from './PrivateRoute';

// Split NewHomePage for lazy load
const AsyncHome = Loadable({
  loader: () => import('./components/pages/newHomePage/NewHomePage'),
  loading: LoadingCompoment,
});

// Split Product for lazy load
const AsyncProduct = Loadable({
  loader: () => import('./components/pages/Product/Product'),
  loading: LoadingCompoment,
});

// Split LoginPage for lazy load
const AsyncLoginPage = Loadable({
  loader: () => import('./components/pages/LoginPage'),
  loading: LoadingCompoment,
});

// Split LoginPageAdmin for lazy load
const AsyncLoginPageAdmin = Loadable({
  loader: () => import('./components/pages/LoginPageAdmin'),
  loading: LoadingCompoment,
});

// Split AccountPage for lazy load
const AsyncAccountPage = Loadable({
  loader: () => import('./components/pages/User/AccountPage/AccountPage'),
  loading: LoadingCompoment,
});

// Split UserInfoPage for lazy load
const AsyncUserInfoPage = Loadable({
  loader: () => import('./components/pages/User/UserInformation/UserInfoPage'),
  loading: LoadingCompoment,
});

// Split UserOrders for lazy load
const AsyncUserOrdersPage = Loadable({
  loader: () => import('./components/pages/User/UserOrder/UserOrders'),
  loading: LoadingCompoment,
});

// Split RegisterPage for lazy load
const AsyncRegisterPage = Loadable({
  loader: () => import('./components/pages/RegisterPage'),
  loading: LoadingCompoment,
});

// Split CartPage for lazy load
const AsyncCartPage = Loadable({
  loader: () => import('./components/pages/CartPage/CartPage'),
  loading: LoadingCompoment,
});

// Split CheckOutStripe for lazy load
const AsyncCheckOutStripe = Loadable({
  loader: () => import('./components/pages/checkOutStripe/CheckoutPage'),
  loading: LoadingCompoment,
});

// Split CheckoutPage for lazy load
const AsyncCheckoutPage = Loadable({
  loader: () => import('./components/pages/checkOut/CheckoutPage'),
  loading: LoadingCompoment,
});

// Split CategoryPage for lazy load
const AsyncCategoryPage = Loadable({
  loader: () => import('./components/pages/Category/CategoryPage'),
  loading: LoadingCompoment,
});

// Split DashBoardPage for lazy load
const AsyncDashBoardPage = Loadable({
  loader: () => import('./components/pages/Dashboard/DashBoardPage'),
  loading: LoadingCompoment,
});

/**
 *
 * For setting router React app
 * @const AppRoutes
 * @extends {PureComponent}
 */
const AppRoutes = ({ location }) => (
  /**
   *
   * Switch and Route for app
   * @returns
   * @memberof AppRoutes
   */

  // Check and return Comnent match with route
  <>
    {' '}
    {/* Route for login */}
    <Route location={location} path="/login" exact component={AsyncLoginPage} />
    {/* Route for login */}
    <Route
      location={location}
      path="/admin"
      exact
      component={AsyncLoginPageAdmin}
    />
    {/* Route for register */}
    <Route
      location={location}
      path="/register"
      exact
      component={AsyncRegisterPage}
    />
    {/* Route for cart */}
    <Route location={location} path="/cart" exact component={AsyncCartPage} />
    {/* Route for checkout */}
    <PrivateRoute
      location={location}
      path="/checkout"
      component={AsyncCheckoutPage}
    />
    {/* Route for checkout */}
    <PrivateRoute
      location={location}
      path="/checkoutonline"
      component={AsyncCheckOutStripe}
    />
    {/* Route for category */}
    <Route
      location={location}
      path="/category"
      exact
      component={AsyncCategoryPage}
    />
    {/* Route for category search */}
    <Route
      location={location}
      path="/category/search/:searchvalue"
      exact
      component={AsyncCategoryPage}
    />
    {/* Route for login */}
    <Route
      location={location}
      path="/category/:page"
      exact
      component={AsyncCategoryPage}
    />
    {/* Route for flowers search by event */}
    <Route
      location={location}
      path="/flowers/event/:typeevent/:page"
      exact
      component={AsyncCategoryPage}
    />
    {/* Route for product by id */}
    <Route location={location} path="/product/:id" component={AsyncProduct} />
    {/* Route for account */}
    <PrivateRoute
      location={location}
      path="/account"
      component={AsyncAccountPage}
    />
    {/* Route for userinfo */}
    <PrivateRoute
      location={location}
      path="/userinfo"
      component={AsyncUserInfoPage}
    />
    {/* Route for userorders */}
    <PrivateRoute
      location={location}
      path="/userorders"
      component={AsyncUserOrdersPage}
    />
    {/* Route for dashboard */}
    <PrivateRouteAdmin
      location={location}
      path="/dashboard"
      component={AsyncDashBoardPage}
    />
    {/* Route for home */}
    <Route location={location} path="/" exact component={AsyncHome} />
    {/* Route for home */}
    {/* <Route location={location} component={AsyncHome} /> */}
  </>
);
// Export Component
export default AppRoutes;
