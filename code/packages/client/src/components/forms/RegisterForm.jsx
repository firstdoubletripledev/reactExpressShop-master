// import Button, Checkbox, Form, Input component from antd
import { Button, Checkbox, Form, Input } from 'antd';

// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React from 'react';

// import connect function from react-redux
import { connect } from 'react-redux';

// import Route module from react-router-dom for router in react
import { withRouter } from 'react-router-dom';

// import error, success message module
import { errorMessage, successMessage } from '../pages/utils/Message';

// create FormItem
const FormItem = Form.Item;

/**
 *
 *
 * @class RegistrationForm
 * @extends {React.PureComponent}
 */
class RegistrationForm extends React.PureComponent {
  /**
   *
   *
   * @memberof RegistrationForm
   */
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  /**
   *
   *
   */
  componentDidMount = () => {
    const { isLogin = false } = this.props;
    if (isLogin !== false) {
      const { history } = this.props;
      history.push('/');
    }
  };

  /**
   *
   *
   * @param {*} e
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const bodyReq = {
          email: values.email,
          password: values.password,
        };
        const res = await Axios.post('api/users', bodyReq).catch(error => {
          return console.log(error.response);
        });
        if (!res) {
          return null;
        }

        if (res.status === 504) {
          errorMessage("Can't connect to server");
        }
        const {
          code = 0,
          msg = 'error not found please reload page and try again',
          // data = {}
        } = res.data;

        successMessage(msg);
        if (code === 1) {
          return this.props.history.push('/login');
        }
        return true;
      }
    });
  };

  /**
   *
   *
   * @param {*} e
   */
  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  /**
   *
   *
   * @param {*} rule
   * @param {*} value
   * @param {*} callback
   */
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  /**
   *
   *
   * @param {*} rule
   * @param {*} value
   * @param {*} callback
   * @returns
   */
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }

    if (value) {
      const patt = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm
      );
      const res = patt.test(value);
      console.log(res, value);
      if (res) {
        return callback();
      } else {
        return callback(
          'Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!'
        );
      }
    }

    return callback();
  };

  /**
   *
   *
   * @param {*} value
   */
  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  /**
   *
   *
   * @returns
   * @memberof RegistrationForm
   */
  render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            rules: [
              {
                required: true,
                message: 'Please agree agreement!',
              },
            ],
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Password-authenticated_key_agreement"
              >
                agreement
              </a>
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

// Wrapped component to antd function
const WrappedRegistrationForm = Form.create()(RegistrationForm);

/**
 *
 *
 * @param {*} { isLogin }
 */
const mapStateToProps = ({ isLogin }) => ({
  isLogin,
});

// export component
export default withRouter(connect(mapStateToProps)(WrappedRegistrationForm));
