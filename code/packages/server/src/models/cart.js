module.exports = function Cart(oldCart) {
  // oldCart là cái cart cũ
  this.items = oldCart.items || {}; // items là một đối tượng có nhiều item , đối tượng này gồm nhiều cặp key:value ,với key là id của item(có nhiều id khác nhau) ,còn value là một đối tượng chứa đối tượng item, số lượng của item và giá của item
  this.totalQty = oldCart.totalQty || 0; // đây là tổng số lượng tất cả các item có trong cart
  this.totalPrice = oldCart.totalPrice || 0; // tổng tiền của tất cả cacs item có trong cart

  this.add = function(item, id) {
    // thực hiện thêm item vào trong cart , item này có thể đã có trước trong cart
    let storeItem = this.items[id]; // storeItem chính là đối tượng sản phẩm
    if (!storeItem) {
      storeItem = this.items[id] = { item, qty: 0, price: 0 }; // nếu item chưa có trong cart thì bắt đầu tạo mới item này trong cart ... price trong đối tượng storeItem là tổng giá của storeItem
    }
    storeItem.qty++;
    storeItem.price = storeItem.item.price * storeItem.qty;
    this.totalQty++;
    this.totalPrice += Number(storeItem.item.price); // chỗ này do tạo model cho product sai nên phải sử dụng number để chuyển cái price của item thành sô
  };

  this.reduceByOne = function(id) {
    this.items[id].qty--;
    this.items[id].price -= this.items[id].item.price;
    this.totalQty--;
    this.totalPrice -= this.items[id].item.price;
    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };
  this.removeItem = function(id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };
  this.generateArray = function() {
    const arr = [];
    for (const id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
