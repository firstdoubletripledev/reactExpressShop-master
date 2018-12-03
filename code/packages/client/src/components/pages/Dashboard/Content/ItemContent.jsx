// import Axios module from axios for Promise based HTTP request
import Axios from 'axios';

// import React module from react for JSX
import React, { PureComponent } from 'react';

// import columnsItem, onChangeItem component
import { columnsItem, onChangeItem } from './Components/table/columnsItem';

// import TableDashboard component
import { TableDashboard } from './Components/TableDashboard';

// import errorMessage component
import { errorMessage } from '../../utils/Message';

/**
 *
 *
 * @class ItemContent
 * @extends {PureComponent}
 */
class ItemContent extends PureComponent {
  /**
   *
   *
   * @memberof ItemContent
   */
  state = {
    dataItem: [],
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
        const res = await Axios.get('/api/products');
        const { data = [] } = res;
        const fornmatData = data.map(data => {
          const rfData = data;
          rfData.customColumn = {
            name: data.name,
            pathImg: data.pathImg,
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
      if (name === 'item') {
        const res = await Axios.get(`/api/products/${_id}`);
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
    await Axios.delete(`/api/products/${_id}`);
    const { dataItem } = this.state;
    return this.setState({
      dataItem: dataItem.filter(item => item._id !== _id),
    });
  };

  /**
   *
   *
   * @returns
   * @memberof ItemContent
   */
  render() {
    const { dataItem, loading, dataInput, isActiveFormEdit } = this.state;
    return (
      <div>
        <TableDashboard
          columns={columnsItem(
            this.onClickLink,
            this.handleDelete,
            dataItem.length
          )}
          dataSource={dataItem}
          onChange={onChangeItem}
          typeTable="Item"
          loading={loading}
          isActiveFormEdit={isActiveFormEdit}
          dataInput={dataInput}
        />
      </div>
    );
  }
}

// export component
export { ItemContent };
