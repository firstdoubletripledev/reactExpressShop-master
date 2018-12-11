// import message component from antd
import { message as antdMessage } from 'antd';

/**
 *
 *
 * @param {*} message
 */
const successMessage = message => {
  antdMessage.success(message);
};

/**
 *
 *
 * @param {*} message
 */
const errorMessage = message => {
  antdMessage.error(message);
};

/**
 *
 *
 * @param {*} message
 */
const warningMessage = message => {
  antdMessage.warning(message);
};

// export module
export { successMessage, errorMessage, warningMessage };
