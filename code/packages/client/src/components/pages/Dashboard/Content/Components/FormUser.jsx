import { Form, Icon, Input, Button, Radio } from 'antd';
import React, { PureComponent } from 'react';
import Axios from 'axios';
import { successMessage, errorMessage } from '../../../utils/Message';

const FormItem = Form.Item;

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function checkRequiredInput(value) {
  switch (value) {
    case 'email':
      return true;
    case 'password':
      return true;
    case 'code':
      return true;
    case 'name':
      return true;
    case 'pathImg':
      return true;
    case 'phoneNumberShip':
      return true;
    case 'price':
      return true;
    default:
      return false;
  }
}

class FormAdd extends PureComponent {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    try {
      e.preventDefault();
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const { typeInput, typeTable } = this.props;
          if (typeInput === 'edit') {
            const { dataInput: { _id = '' } = {} } = this.props;
            let res = {};
            if (typeTable === 'User') {
              res = await Axios.put(`/api/users/${_id}`, values);
            }
            if (typeTable === 'Item') {
              res = await Axios.put(`/api/products/${_id}`, values);
            }

            const { data: { _id: _idRes = null } = {} } = res;
            if (_idRes !== null) {
              successMessage('success');
            }
          } else {
            const { typeTable } = this.props;
            if (typeTable === 'User') {
              const res = await Axios.post('/api/users', values);
              const {
                data: { code: codeRes = 0, msg = '' },
              } = res;
              if (codeRes === 0) {
                errorMessage(msg);
              }
              if (codeRes === 1) {
                this.props.form.resetFields();
                successMessage(msg);
              }
            }
            if (typeTable === 'Item') {
              await Axios.post('/api/products', values);
            }
            if (typeTable === 'Order') {
              await Axios.post('/api/orders', values);
            }
          }
        }
      });
    } catch (error) {
      console.log(error);
      errorMessage(error);
    }
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    const {
      listInput = [],
      typeTable = '',
      typeInput = '',
      dataInput = {},
    } = this.props;

    // Only show error after a field is touched.
    const errorValidate = {
      email: isFieldTouched('email') && getFieldError('email'),
      address: isFieldTouched('address') && getFieldError('address'),
      password: isFieldTouched('password') && getFieldError('password'),
      phonenumber:
        isFieldTouched('phonenumber') && getFieldError('phonenumber'),
      role: isFieldTouched('role') && getFieldError('role'),
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        {listInput.map((data = {}, i) => {
          return (
            <FormItem
              key={`TableDashboard-FormItem-${data.value}-${i}}`}
              validateStatus={errorValidate[data.value] ? 'error' : ''}
              help={errorValidate[data.value] || ''}
              label={data.label}
            >
              {getFieldDecorator(data.value, {
                rules: [
                  {
                    required: checkRequiredInput(data.value),
                    message: `Please input your ${data.label}!`,
                  },
                ],
                initialValue:
                  typeInput === 'edit'
                    ? data.value === 'category' || data.value === 'galleryImage'
                      ? JSON.stringify(dataInput[data.value])
                      : data.value === 'password'
                      ? ''
                      : dataInput[data.value]
                    : data.value === 'role'
                    ? 'user'
                    : null,
              })(
                data.value === 'role' ? (
                  <RadioGroup>
                    <RadioButton value="user">User</RadioButton>
                    <RadioButton value="admin">Admin</RadioButton>
                  </RadioGroup>
                ) : (
                  <Input
                    prefix={
                      <Icon
                        type={
                          data.value === 'email'
                            ? 'mail'
                            : data.value === 'password'
                            ? 'lock'
                            : 'minus'
                        }
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                    }
                    type={
                      typeInput === 'edit'
                        ? data.value === 'password'
                          ? 'text'
                          : data.value
                        : data.value
                    }
                    placeholder={data.label}
                  />
                )
              )}
            </FormItem>
          );
        })}

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            {typeInput === 'addnew'
              ? `Add new ${typeTable}`
              : `Update ${typeTable}`}
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const FormUser = Form.create()(FormAdd);

export { FormUser };
