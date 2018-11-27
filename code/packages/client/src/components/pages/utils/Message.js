import { message as antdMessage } from 'antd';

const successMessage = message => {
  antdMessage.success(message);
};

const errorMessage = message => {
  antdMessage.error(message);
};

const warningMessage = message => {
  antdMessage.warning(message);
};

export { successMessage, errorMessage, warningMessage };
