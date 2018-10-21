import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Redirect } from 'react-router-dom';



const { Header, Sider, Content } = Layout;

class DashBoardPage extends Component {
  state = {
    collapsed: false,
    menu: 3,
  };
  componentDidMount = () => {
 
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  onClickMenuItem = async data => {
    await this.setState({
      menu: data,
    });
  };
  render() {
    if (this.state.menu === 0) {
      return <Redirect push to="/" />;
    }
    const { menu } = this.state;

    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="0">
              <div onClick={this.onClickMenuItem.bind(this, 0)}>
                <Icon type="home" />
                <span>HomePage</span>
              </div>
            </Menu.Item>
            <Menu.Item key="1">
              <div onClick={this.onClickMenuItem.bind(this, 3)}>
                <Icon type="contacts" />
                <span>User</span>
              </div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={this.onClickMenuItem.bind(this, 4)}>
                <Icon type="picture" />
                <span>Picture</span>
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} style={{ marginLeft: '17px' }} />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
         
            {menu === 3 ? (
              <div>
                3
              </div>
            ) : (
              ''
            )}
            {menu === 4 ? (
              <div>
               4
              </div>
            ) : (
              ''
            )}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default DashBoardPage;
