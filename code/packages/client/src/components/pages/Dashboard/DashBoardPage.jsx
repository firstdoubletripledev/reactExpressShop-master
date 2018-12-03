// import Icon, Layout, Menu component from antd
import { Icon, Layout, Menu } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Route module from react-router-dom for router in react
import { Link, Redirect } from 'react-router-dom';

// import themeLogo image
import themeLogo from '../../navigations/theme-logo.jpg';

// import DashboardOverView, ItemContent, OrderContent, ShopContent, UserContent component
import {
  DashboardOverView,
  ItemContent,
  OrderContent,
  ShopContent,
  UserContent,
} from './Content';

// create Header, Sider, Content from layout
const { Header, Sider, Content } = Layout;

/**
 *
 *
 * @class DashBoardPage
 * @extends {PureComponent}
 */
class DashBoardPage extends PureComponent {
  /**
   *
   *
   * @memberof DashBoardPage
   */
  state = {
    collapsed: false,
    menu: 1,
  };
  /**
   *
   *
   */
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  /**
   *
   *
   * @param {*} data
   */
  onClickMenuItem = async data => {
    await this.setState({
      menu: data,
    });
  };
  /**
   *
   *
   * @returns
   * @memberof DashBoardPage
   */
  render() {
    if (this.state.menu === 0) {
      return <Redirect push to="/" />;
    }
    const { menu } = this.state;
    const { location } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="Sider-dashboard"
        >
          <div
            className="logo logo-dashboard"
            onClick={this.onClickMenuItem.bind(this, 0)}
          >
            <img className="img-responsive" src={themeLogo} alt="Flower" />
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            {/* <Menu.Item key="0">
              <div onClick={this.onClickMenuItem.bind(this, 0)}>
                <Icon type="home" />
                <span>HomePage</span>
              </div>
            </Menu.Item> */}
            <Menu.Item key="1">
              <div onClick={this.onClickMenuItem.bind(this, 1)}>
                <Link to="/dashboard">
                  <div>
                    <Icon type="dashboard" />
                    <span>Dashboard</span>
                  </div>
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={this.onClickMenuItem.bind(this, 2)}>
                <Link to="/dashboard">
                  <div>
                    <Icon type="user" /> <span>User</span>
                  </div>
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item key="3">
              <div onClick={this.onClickMenuItem.bind(this, 3)}>
                <Link to="/dashboard">
                  <div>
                    <Icon type="barcode" /> <span>Products</span>
                  </div>
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item key="4">
              <div onClick={this.onClickMenuItem.bind(this, 4)}>
                <Link to="/dashboard">
                  <div>
                    <Icon type="shopping-cart" /> <span>Order</span>
                  </div>
                </Link>
              </div>
            </Menu.Item>

            <Menu.Item key="5">
              <div onClick={this.onClickMenuItem.bind(this, 5)}>
                <Link to="/dashboard">
                  <div>
                    <Icon type="shop" /> <span>Shop</span>
                  </div>
                </Link>
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{ marginLeft: '17px' }}
            />
          </Header>
          <Content
            style={{
              borderTop: '1px solid #e8e8e8',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {menu === 1 ? <DashboardOverView /> : ''}
            {menu === 2 ? <UserContent location={location} /> : ''}
            {menu === 3 ? <ItemContent location={location} /> : ''}
            {menu === 4 ? <OrderContent location={location} /> : ''}
            {menu === 5 ? <ShopContent /> : ''}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// export component
export default DashBoardPage;
