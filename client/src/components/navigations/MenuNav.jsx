import React, { Component } from 'react';
import { Menu, Icon,Form, Input, Button  } from 'antd';
import {connect} from 'react-redux';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

class MenuNav extends Component {
  //may cai key xem lai trong antd 
  
  componentDidMount = () => {
    var sl = 5; 
    var {dispatch} = this.props;
    dispatch({type:'Get_SLItem_In_Session',item:sl});
    
    
   
  };

  

  render() {
    
    
    return (
      
          <Menu 
            onClick={this.handleClick1}
           
            mode="horizontal"
           

          >
          <Menu.Item  style={{}} >
          <a href='/'><img alt="example" src="/images/logo.jpg"  style={{width:'30px'}} /></a>
          
        </Menu.Item>
       
            <Menu.Item >
              <Icon type="home" theme="outlined" style={{marginRight:'0px'}}/>HOME
        </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="bars" theme="outlined" style={{marginRight:'0px'}}/>CATEGORY</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item >Option 1</Menu.Item>
                <Menu.Item >Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item >Option 3</Menu.Item>
                <Menu.Item >Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item >
              <Form layout="inline" style={{marginBottom:'3px'}} >
                <FormItem style={{marginRight:'3px'}}>

                  <Input prefix={<Icon type="search" theme="outlined" />} placeholder="Search in Shop..." />

                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"

                  >
                    Search
          </Button>
                </FormItem>
              </Form>

            </Menu.Item>
            <Menu.Item >
            <a href='/cart'><Icon type="shopping-cart" theme="outlined" style={{marginRight:'0px'}}/> {this.props.SLItemCart} items in cart</a>
           
        </Menu.Item>

            <SubMenu title={<span className="submenu-title-wrapper"><Icon type="user" theme="outlined" />USER ACCOUNT</span>}>

              <Menu.Item ><a href="/login">Sign in</a></Menu.Item>
              <Menu.Item ><a href="/register">Sign up</a></Menu.Item>
            </SubMenu>
            <Menu.Item >
            <Icon type="contacts" theme="outlined" /> CONTACT US
           
        </Menu.Item>
          </Menu>
        

      



    );
  }
}
const MenuNavRedux = connect(function(state){
  return {SLItemCart: state.SLItemCart,isLogin:state.isLogin}
})(MenuNav);

export default MenuNavRedux ;
