// import { Elastic, TweenMax } from 'gsap';
import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import LoadingCompoment from './components/LoadingCompoment';
import PrivateRouteAdmin from './PrivateRouteAdmin';

// import { Transition, TransitionGroup } from 'react-transition-group';

// import PrivateRoute from './PrivateRoute';
const AsyncHome = Loadable({
  loader: () => import('./components/pages/newHomePage/NewHomePage'),
  loading: LoadingCompoment,
});

const AsyncProduct = Loadable({
  loader: () => import('./components/pages/Product/Product'),
  loading: LoadingCompoment,
});

const AsyncLoginPage = Loadable({
  loader: () => import('./components/pages/LoginPage'),
  loading: LoadingCompoment,
});
const AsyncRegisterPage = Loadable({
  loader: () => import('./components/pages/RegisterPage'),
  loading: LoadingCompoment,
});
const AsyncCartPage = Loadable({
  loader: () => import('./components/pages/CartPage/CartPage'),
  loading: LoadingCompoment,
});
const AsyncCheckoutPage = Loadable({
  loader: () => import('./components/pages/checkOut/CheckoutPage'),
  loading: LoadingCompoment,
});
const AsyncCategoryPage = Loadable({
  loader: () => import('./components/pages/Category/CategoryPage'),
  loading: LoadingCompoment,
});
const AsyncDashBoardPage = Loadable({
  loader: () => import('./components/pages/Dashboard/DashBoardPage'),
  loading: LoadingCompoment,
});

// const duration = 100;

// const animation = {
//   show(target, isAppearing) {
//     return TweenMax.from(target, duration, {
//       opacity: 1,
//       ease: Elastic.easeOut.config(0.25, 1),
//     });
//   },

//   hide(target) {
//     return TweenMax.to(target, duration, {
//       opacity: 0,
//       ease: Elastic.easeOut.config(0.25, 1),
//     });
//   },
// };

class AppRoutes extends PureComponent {
  // onEnter = (node, isAppearing) => {
  //   animation.show(node, isAppearing);
  // };

  // onExit = node => {
  //   animation.hide(node);
  // };
  render() {
    const { location } = this.props;

    return (
      // <TransitionGroup>
      //   <Transition
      //     key={location.key}
      //     timeout={400}
      //     onEnter={this.onEnter}
      //     onExit={this.onExit}
      //   >
      <Switch location={location}>
        <Route
          location={location}
          path="/login"
          exact
          component={AsyncLoginPage}
        />
        <Route
          location={location}
          path="/register"
          exact
          component={AsyncRegisterPage}
        />
        <Route
          location={location}
          path="/cart"
          exact
          component={AsyncCartPage}
        />
        <Route
          location={location}
          path="/checkout"
          component={AsyncCheckoutPage}
        />

        <Route
          location={location}
          path="/category"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/category/search/:searchvalue"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/category/:page"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/flowers/event/:typeevent/:page"
          exact
          component={AsyncCategoryPage}
        />
        <Route
          location={location}
          path="/product/:id"
          component={AsyncProduct}
        />
        <PrivateRouteAdmin
          location={location}
          path="/dashboard"
          component={AsyncDashBoardPage}
        />

        <Route location={location} path="/" exact component={AsyncHome} />
        <Route location={location} component={AsyncHome} />
      </Switch>
      //   </Transition>
      // </TransitionGroup>
    );
  }
}

export default AppRoutes;
