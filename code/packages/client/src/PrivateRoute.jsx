// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Route module from react-router-dom for router in react
import { Redirect, Route } from 'react-router-dom';

// import get Auth function
import getAuth from './components/getAuth';

// import Loading Compoment
import LoadingCompoment from './components/LoadingCompoment';

/**
 *
 *
 * @class PrivateRoute
 * @extends {PureComponent}
 */
class PrivateRoute extends PureComponent {
  /**
   *
   *
   * @memberof PrivateRoute
   */
  state = {
    loading: true,
    isAuth: false,
  };

  /**
   *
   *
   * @memberof PrivateRoute
   */
  componentDidMount() {
    getAuth().then(data => {
      this.setState({
        loading: false,
        isAuth: data,
      });
    });
  }

  /**
   *
   *
   * @returns
   * @memberof PrivateRoute
   */
  render() {
    const { component: Component = null, ...rest } = this.props;
    // const { isLogin = null } = rest;
    if (this.state.loading) {
      return <LoadingCompoment />;
    } else {
      return (
        <Route
          {...rest}
          render={props =>
            this.state.isAuth === 1 ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      );
    }
  }
}

// Export Component
export default PrivateRoute;
