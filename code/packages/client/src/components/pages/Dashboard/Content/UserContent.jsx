// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import columnsUser, onChangeUser component
import { columnsUser, onChangeUser } from './Components/table/columnsUser';

// import TableDashboard component
import { TableDashboard } from './Components/TableDashboard';

// import errorMessage module
import { errorMessage } from '../../utils/Message';

/**
 *
 *
 * @class UserContent
 * @extends {PureComponent}
 */
class UserContent extends PureComponent {
  /**
   *
   *
   * @memberof UserContent
   */
  state = {
    dataUser: [],
    loading: false,
    isActiveFormEdit: false,
    dataInput: {},
  };
  /**
   *
   *
   */
  componentDidMount = async () => {
    try {
      this.setState({
        loading: true,
      });
      const checkLink = await this.checkLinkEdit();
      if (!checkLink) {
        const res = await Axios.get('/api/users');
        const { data = [] } = res;
        const fornmatData = data.map(data => {
          const rfData = data;
          rfData.customColumn = {
            email: data.email,
            _id: data._id,
          };
          return rfData;
        });

        this.setState({
          dataUser: fornmatData,
        });
      }

      this.setState({
        loading: false,
      });
    } catch (error) {
      console.log(error);
      errorMessage(error);
    }
  };
  /**
   *
   *
   * @param {*} _id
   * @param {*} name
   */
  onClickLink = async (_id, name) => {
    this.setState({
      loading: true,
    });
    if (_id) {
      if (name === 'user') {
        const res = await Axios.get(`/api/users/${_id}`);
        const { data = {} } = res;
        this.setState({
          isActiveFormEdit: true,
          dataInput: data,
        });
      }
    }

    this.setState({
      loading: false,
    });
  };
  /**
   *
   *
   * @returns
   */
  checkLinkEdit = async () => {
    const { location: { pathname = '' } = {} } = this.props;
    const listPath = pathname.split('/');
    console.log(listPath);
    if (listPath[1] === 'dashboard' && listPath[3] === 'edit') {
      let dataInput = {};
      if (listPath[2] === 'products') {
        const res = await Axios.get(`/api/products/${listPath[4]}`);

        const { data = {} } = res;
        dataInput = data;
      }
      if (listPath[2] === 'user') {
        const res = await Axios.get(`/api/users/${listPath[4]}`);

        const { data = {} } = res;

        dataInput = data;
      }
      if (listPath[2] === 'order') {
        const res = await Axios.get(`/api/orders/${listPath[4]}`);

        const { data = {} } = res;

        dataInput = data;
      }
      if (dataInput._id) {
        this.setState({
          isActiveFormEdit: true,
          dataInput,
        });
        return true;
      }
    }
    return false;
  };

  /**
   *
   *
   * @param {*} _id
   * @returns
   */
  handleDelete = async _id => {
    await Axios.delete(`/api/users/${_id}`);
    const { dataUser } = this.state;
    return this.setState({
      dataUser: dataUser.filter(item => item._id !== _id),
    });
  };
  render() {
    const { dataUser, loading, dataInput, isActiveFormEdit } = this.state;
    return (
      <div>
        <TableDashboard
          columns={columnsUser(
            this.onClickLink,
            this.handleDelete,
            dataUser.length
          )}
          dataSource={dataUser}
          onChange={onChangeUser}
          typeTable="User"
          loading={loading}
          isActiveFormEdit={isActiveFormEdit}
          dataInput={dataInput}
        />
      </div>
    );
  }
}

// export component
export { UserContent };
