// import React module from react for JSX
import React, { PureComponent } from 'react';

import Axios from 'axios';

// import TableDashboard component
import { TableDashboard } from './Components/TableDashboard';
import { columnsOrder, onChangeOrder } from './Components/table/columnsOrder';
import { errorMessage } from '../../utils/Message';

/**
 *
 *
 */
class OrderContent extends PureComponent {
  state = {
    dataItem: [],
  };

  componentDidMount = () => {
    this.getListOrder();
  };

  getListOrder = async () => {
    try {
      this.setState({
        loading: true,
      });
      const checkLink = await this.checkLinkEdit();
      if (!checkLink) {
        const res = await Axios.get('/api/orders');
        const { data = [] } = res;
        const fornmatData = data.map((data = {}) => {
          const rfData = data;
          rfData.customColumn = {
            name: `${data.firstName} ${data.lastName}`,
            addressShip: data.addressShip,
            phoneNumberShip: data.phoneNumberShip,
            _id: data._id,
          };
          return rfData;
        });
        this.setState({
          dataItem: fornmatData,
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

  handleDelete = async _id => {
    await Axios.delete(`/api/orders/${_id}`);
    const { dataItem } = this.state;
    return this.setState({
      dataItem: dataItem.filter(item => item._id !== _id),
    });
  };

  onClickLink = async (_id, name) => {
    this.setState({
      loading: true,
    });
    if (_id) {
      if (name === 'order') {
        const res = await Axios.get(`/api/orders/${_id}`);
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

  render() {
    const { dataItem, loading, dataInput, isActiveFormEdit } = this.state;

    return (
      <div>
        <TableDashboard
          typeTable="Order"
          columns={columnsOrder(
            this.onClickLink,
            this.handleDelete,
            dataItem.length
          )}
          dataSource={dataItem}
          onChange={onChangeOrder}
          loading={loading}
          isActiveFormEdit={isActiveFormEdit}
          dataInput={dataInput}
        />
      </div>
    );
  }
}

// export component
export { OrderContent };
