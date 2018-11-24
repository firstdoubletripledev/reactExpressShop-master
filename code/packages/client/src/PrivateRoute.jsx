import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import getAuth from './components/getAuth';

class PrivateRoute extends Component {
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
    const { isLogin = null } = rest;
    if (this.state.loading) {
      return <div>Loading...</div>;
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

const mapStateToProps = ({ isLogin }) => ({
  isLogin,
});

export default connect(mapStateToProps)(PrivateRoute);
