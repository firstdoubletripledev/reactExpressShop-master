import { Container } from 'unstated';

class StateContainer extends Container {
  /**
   *
   *
   * @memberof StateContainer
   */
  state = {
    email: '',
  };

  /**
   *
   *
   * @param {string} [email='']
   * @returns
   */
  setEmail = async (email = '') => {
    return await this.setState({ email: email });
  };
}

class CounterContainer extends Container {
  /**
   *
   *
   * @memberof CounterContainer
   */
  /**
   *
   *
   * @memberof CounterContainer
   */
  state = { email: '' };
  /**
   *
   *
   * @param {*} email
   * @memberof CounterContainer
   */
  setEmail(email) {
    this.setState({ email });
  }
}

// export Component
export { StateContainer, CounterContainer };
