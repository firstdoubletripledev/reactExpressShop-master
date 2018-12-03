// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Route module from react-router-dom for router in react
import { Redirect, Route } from 'react-router-dom';

// import get Auth function
import getAuth from './components/getAuth';

// import Loading Compoment
import LoadingCompoment from './components/LoadingCompoment';

// import warning Message module
import { warningMessage } from './components/pages/utils/Message';

/**
 *
 *
 * @class PrivateRouteAdmin
 * @extends {PureComponent}
 */
class PrivateRouteAdmin extends PureComponent {
  /**
   *
   *
   * @memberof PrivateRouteAdmin
   */
  state = {
    loading: true,
    isAuth: false,
  };

  /**
   *
   *
   * @memberof PrivateRouteAdmin
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
   * @memberof PrivateRouteAdmin
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
            this.state.isAuth === 2 ? (
              <Component {...props} />
            ) : (
              <>
                {warningMessage(
                  'Sorry this is for admin if you want to access this please contact to Admin'
                )}
                <Redirect
                  to={{
                    pathname: '/',
                    state: { from: props.location },
                  }}
                />
              </>
            )
          }
        />
      );
    }
  }
}

// Export Component
export default PrivateRouteAdmin;
