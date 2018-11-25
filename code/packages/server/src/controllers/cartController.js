const Cart = require('../models/cart.js');
const Product = require('../models/productsModel.js');

/**
 * cartController.js
 *
 * @description :: Server-side logic for managing carts.
 */
module.exports = {
  shoppingcart(req, res) {
    if (!req.session.cart) {
      return res.json({ cart: null });
    }
    const cart = new Cart(req.session.cart);
    const cart1 = {
      products: cart.generateArray() || [],
      totalPrice: cart.totalPrice || '',
      totalQty: cart.totalQty || '',
    };
    console.log(cart1);
    return res.json(cart1);
  },
  addToCart(req, res) {
    const productId = req.params.id;
    // xem thử trong session có cart chwua nếu chưa thì cho cái cart đó là
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    Product.findById(productId, (err, product) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting categories.',
          error: err,
        });
      }
      // console.log(req.user);

      cart.add(product, productId);
      req.session.cart = cart;
      const cart1 = {
        products: cart.generateArray() || [],
        totalPrice: cart.totalPrice || '',
        totalQty: cart.totalQty || '',
      };
      console.log(cart1);
      return res.json(cart1);

      // console.log(product);
    });
  },

  reduce(req, res) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);

    req.session.cart = cart;
    const cart1 = {
      products: cart.generateArray() || [],
      totalPrice: cart.totalPrice || '',
      totalQty: cart.totalQty || '',
    };
    console.log(cart1);
    return res.json(cart1);
  },

  remove(req, res) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);

    req.session.cart = cart;
    const cart1 = {
      products: cart.generateArray() || [],
      totalPrice: cart.totalPrice || '',
      totalQty: cart.totalQty || '',
    };
    console.log(cart1);
    return res.json(cart1);
  },
};
