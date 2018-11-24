import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Row, Col } from "antd";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import isLoginAction from "../../reduxx/actions/isLoginAction";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  componentDidMount = () => {
    const { isLogin = false } = this.props;
    if (isLogin !== false) {
      const { history } = this.props;
      history.push("/");
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const bodyRes = {
          email: values.userName,
          password: values.password
        };
        const res = await Axios.post("api/users/login", bodyRes).catch(
          error => {
            return console.log(error.response);
          }
        );
        if (res.status === 504) {
          alert("Can't connect to server");
        }
        const {
          code = 0,
          msg = "error not found please reload page and try again",
          data = {},
          token
        } = res.data;
        console.log(data);

        if (code === 1) {
          localStorage.setItem("token", `JWT ${token}`);
          localStorage.setItem("userid", data.userId);
          const { dispatch } = this.props;
          await dispatch(isLoginAction(code));
          if (data.role === "admin") {
            return this.props.history.push("/dashboard");
          } else {
            return this.props.history.push("/");
          }
        }
        return true;
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username/Email"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="#0">
            Forgot password
          </a>
          <Row>
            <Col xs={24} lg={24}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: "-webkit-fill-available" }}
              >
                Log in
              </Button>
            </Col>
          </Row>
          Or{" "}
          <Link to="/register" style={{ color: "blue" }}>
            Register now!
          </Link>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = ({ isLogin }) => ({
  isLogin
});

export default withRouter(connect(mapStateToProps)(WrappedNormalLoginForm));
