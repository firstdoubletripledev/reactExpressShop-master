import { Container } from 'unstated';

class StateContainer extends Container {
  state = {
    email: '',
  };

  setEmail = async (email = '') => {
    return await this.setState({ email: email });
  };
}
class CounterContainer extends Container {
  state = { email: '' };
  setEmail(email) {
    this.setState({ email });
  }
}

export { StateContainer, CounterContainer };
