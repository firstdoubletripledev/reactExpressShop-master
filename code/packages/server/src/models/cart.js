module.exports = function Cart(oldCart) {
  // oldCart là cái cart cũ
  // items là một đối tượng có nhiều item , đối tượng này gồm nhiều cặp key:value ,
  // với key là id của item(có nhiều id khác nhau) ,còn value là một đối tượng chứa đối tượng item,
  // số lượng của item và giá của item
  this.items = oldCart.items || {};
  // đây là tổng số lượng tất cả các item có trong cart

  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0; // tổng tiền của tất cả cacs item có trong cart

  this.add = function add(item, id) {
    // thực hiện thêm item vào trong cart , item này có thể đã có trước trong cart
    let storeItem = this.items[id]; // storeItem chính là đối tượng sản phẩm
    if (!storeItem) {
      storeItem = { item, qty: 0, price: 0 };
      this.items[id] = { item, qty: 0, price: 0 };
      // nếu item chưa có trong cart thì bắt đầu tạo mới item này trong cart ...
      // price trong đối tượng storeItem là tổng giá của storeItem
    }
    storeItem.qty += 1;
    storeItem.price = storeItem.item.price * storeItem.qty;
    this.totalQty += 1;
    this.totalPrice += Number(storeItem.item.price);
    // chỗ này do tạo model cho product sai nên phải sử dụng
    // number để chuyển cái price của item thành sô
  };

  this.reduceByOne = function reduceByOne(id) {
    this.items[id].qty -= 1;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty -= 1;
    this.totalPrice -= this.items[id].item.price;
    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.removeItem = function removeItem(id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };

  this.generateArray = function generateArray() {
    const arr = [];
    this.items.map((data) => {
      if (data) {
        arr.push(data);
      }
      return null;
    });
    // for (const id in this.items) {
    //   arr.push(this.items[id]);
    // }
    return arr;
  };
};
