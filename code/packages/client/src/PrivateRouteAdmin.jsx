import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import getAuth from './components/getAuth';

class PrivateRouteAdmin extends Component {
  state = {
    loading: true,
    isAuth: false,
  };

  componentDidMount() {
    getAuth().then(data => {
      this.setState({
        loading: false,
        isAuth: data,
      });
    });
  }

  render() {
    const { component: Component = null, ...rest } = this.props;
    // const { isLogin = null } = rest;
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <Route
          {...rest}
          render={props =>
            this.state.isAuth === 2 ? (
              <Component {...props} />
            ) : (
              <>
                {alert(
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

// const mapStateToProps = ({ isLogin }) => ({
//   isLogin,
// });

// export default connect(mapStateToProps)(PrivateRouteAdmin);
export default PrivateRouteAdmin;
