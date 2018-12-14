// import Form, Icon, Input, Button, Radio component from antd
import { Form, Icon, Input, Button, Radio, List, Card } from 'antd';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import successMessage, errorMessage module
import { successMessage, errorMessage } from '../../../utils/Message';

// create FormItem from Form
const FormItem = Form.Item;

// create RadioButton from Radio
const RadioButton = Radio.Button;

// create RadioGroup from Radio
const RadioGroup = Radio.Group;

// create TextArea from Input
// const { TextArea } = Input;

/**
 *
 *
 * @param {*} fieldsError
 * @returns
 */
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

/**
 *
 *
 * @param {*} value
 * @returns
 */
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

/**
 *
 *
 * @class FormAdd
 * @extends {PureComponent}
 */
class FormAdd extends PureComponent {
  /**
   *
   *
   * @memberof FormAdd
   */
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  /**
   *
   *
   * @param {*} e
   */
  handleSubmit = e => {
    try {
      e.preventDefault();
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const { typeInput, typeTable } = this.props;
          if (typeInput === 'edit') {
            const { dataInput: { _id = '' } = {} } = this.props;
            const { galleryImage = null } = values;
            if (galleryImage !== null) {
              values.galleryImage = JSON.parse(galleryImage);
            }

            let res = {};
            if (typeTable === 'User') {
              res = await Axios.put(`/api/users/${_id}`, values);
            }
            if (typeTable === 'Item') {
              res = await Axios.put(`/api/products/${_id}`, values);
            }

            const { data: { _id: _idRes = null } = {} } = res;
            console.log(_idRes);
            if (_idRes !== null) {
              successMessage('Success');
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

  /**
   *
   *
   * @returns
   * @memberof FormAdd
   */
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
                initialValue: getDefaultValue(typeInput, data, dataInput),
              })(
                data.value === 'role'
                  ? renderRadio()
                  : data.value === 'cart'
                  ? renderCartCard(data, typeInput, dataInput)
                  : renderDeaultInput(data, typeInput)
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

// Create Form using Form function antd
const FormUser = Form.create()(FormAdd);

// export component
export { FormUser };

function renderRadio() {
  return (
    <RadioGroup>
      <RadioButton value="user">User</RadioButton>
      <RadioButton value="admin">Admin</RadioButton>
    </RadioGroup>
  );
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function renderCartCard(data, typeInput, dataInput = {}) {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={dataInput.cart.products}
      renderItem={data => (
        <List.Item>
          <Card title={data.item.name}>
            <img
              className="dashboard-order-item-card-image"
              alt="logo"
              src={data.item.pathImg}
            />
            <p>Qty: {data.qty}</p>
            <p>Total Price: {data.price}</p>
          </Card>
        </List.Item>
      )}
    />
  );
}

function renderDeaultInput(data, typeInput) {
  return (
    <Input
      prefix={
        <Icon type={checkTypeIcon(data)} style={{ color: 'rgba(0,0,0,.25)' }} />
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
  );
}

function getDefaultValue(typeInput, data, dataInput) {
  return typeInput === 'edit'
    ? checkValueObject(data, dataInput)
    : checkValueRole(data);
}

function checkValueObject(data, dataInput) {
  return data.value === 'category' ||
    data.value === 'galleryImage' ||
    data.value === 'cart'
    ? JSON.stringify(dataInput[data.value], null, 2)
    : checkValuePassword(data, dataInput);
}

function checkValuePassword(data, dataInput) {
  return data.value === 'password' ? '' : dataInput[data.value];
}

function checkValueRole(data) {
  return data.value === 'role' ? 'user' : null;
}

function checkTypeIcon(data) {
  return data.value === 'email' ? 'mail' : checkPassword(data);
}

function checkPassword(data) {
  return data.value === 'password' ? 'lock' : 'minus';
}
