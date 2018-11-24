const uniqid = require('uniqid');
const ordersModel = require('../models/ordersModel.js');
const Cart = require('../models/cart.js');

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
module.exports = {
  /**
   * ordersController.list()
   */

  list(req, res, next) {
    ordersModel
      .find()
      .populate({ path: 'user', select: 'email' })
      .exec((err, orders) => {
        if (err) return next(err);
        res.json(orders);
        console.log(orders[0].user.email);
      });
  },

  // list(req, res) {
  //   ordersModel.find((err, orderss) => {
  //     if (err) {
  //       return res.status(500).json({
  //         message: 'Error when getting orders.',
  //         error: err,
  //       });
  //     }
  //     console.log(orderss);
  //     return res.json(orderss);
  //   });
  // },

  /**
   * ordersController.show()
   */
  show(req, res) {
    const { id = null } = req.params;
    ordersModel.findOne({ _id: id }, (err, orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orders.',
          error: err,
        });
      }
      if (!orders) {
        return res.status(404).json({
          message: 'No such orders',
        });
      }
      return res.json(orders);
    });
  },

  /**
   * ordersController.create()
   */
  create(req, res) {
    const cart = new Cart(req.session.cart) || {};

    const cart1 = {
      products: cart.generateArray(),
      totalPrice: cart.totalPrice,
      totalQty: cart.totalQty,
    };

    const date = new Date();
    const code = uniqid();

    const orders = new ordersModel({
      code: `${code}`,
      createdate: `${date}`,
      status: 'noApprove',
      user: req.body.user, // user ở đây là id user.
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      addressShip: req.body.addressShip,
      phoneNumberShip: req.body.phoneNumberShip,
      cart: cart1,
    });

    orders.save((err, ordersData) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating ordersData',
          error: err,
        });
      }
      return res.status(201).json(ordersData);
    });
  },

  /**
   * ordersController.update()
   */
  update(req, res) {
    const { id } = req.params;
    ordersModel.findOne({ _id: id }, (err, orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting orders',
          error: err,
        });
      }
      if (!orders) {
        return res.status(404).json({
          message: 'No such orders',
        });
      }

      orders.status = req.body.status ? req.body.status : orders.status;
      // orders.user = req.body.user ? req.body.user : orders.user;
      orders.firstName = req.body.firstName ? req.body.firstName : orders.firstName;
      orders.lastName = req.body.lastName ? req.body.lastName : orders.lastName;
      orders.addressShip = req.body.addressShip ? req.body.addressShip : orders.addressShip;
      orders.phoneNumberShip = req.body.phoneNumberShip
        ? req.body.phoneNumberShip
        : orders.phoneNumberShip;
      orders.save((errUpdate, ordersUpdate) => {
        if (errUpdate) {
          return res.status(500).json({
            message: 'Error when updating orders.',
            error: errUpdate,
          });
        }

        return res.json(ordersUpdate);
      });
    });
  },

  /**
   * ordersController.remove()
   */
  remove(req, res) {
    const { id } = req.params;
    ordersModel.findByIdAndRemove(id, (err, orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the orders.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },
};
