import Cart from '../models/cart';
import Product from '../models/productsModel';

/**
 * cartController.js
 *
 * @description :: Server-side logic for managing carts.
 */
export default {
  /**
   *
   * cartController.shoppingcart() get Cart by session
   * @param {*} req
   * @param {*} res
   * @returns
   */
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

  /**
   *
   * cartController.addToCart() add new Cart
   * @param {*} req
   * @param {*} res
   */
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

  /**
   *
   * cartController.reduce() reduce Cart
   * @param {*} req
   * @param {*} res
   * @returns
   */
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

  /**
   *
   * cartController.remove() remove Cart
   * @param {*} req
   * @param {*} res
   * @returns
   */
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
  removeAll(req) {
    req.session.cart = {};
  },
};
