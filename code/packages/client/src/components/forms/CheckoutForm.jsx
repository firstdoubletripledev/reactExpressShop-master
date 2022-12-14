// import Button, Form, Input component from antd
import { Button, Form, Input } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// create FormItem
const FormItem = Form.Item;

/**
 *
 *
 * @class CheckoutForm
 * @extends {PureComponent}
 */
class CheckoutForm extends PureComponent {
  /**
   *
   *
   * @memberof CheckoutForm
   */
  state = {};

  /**
   *
   *
   * @memberof CheckoutForm
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  /**
   *
   *
   * @returns
   * @memberof CheckoutForm
   */
  render() {
    const { getFieldDecorator } = this.props.form;

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
        <FormItem {...formItemLayout} label="FirstName">
          {getFieldDecorator('firstName', {
            rules: [
              {},
              {
                required: true,
                message: 'Please input your First Name!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="LastName">
          {getFieldDecorator('lastName', {
            rules: [
              {},
              {
                required: true,
                message: 'Please input your Last Name!',
              },
            ],
          })(<Input />)}
        </FormItem>
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
        <FormItem {...formItemLayout} label="Phone Number">
          {getFieldDecorator('phoneNumber', {
            rules: [
              {},
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator('address', {
            rules: [
              {},
              {
                required: true,
                message: 'Please input your address!',
              },
            ],
          })(<Input />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            PLACE ORDER
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCheckoutForm = Form.create()(CheckoutForm);

// export component
export default WrappedCheckoutForm;
