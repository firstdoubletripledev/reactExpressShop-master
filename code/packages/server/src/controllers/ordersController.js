import uniqid from 'uniqid';
import Stripe from 'stripe';

import OrdersModel from '../models/ordersModel';
import Cart from '../models/cart';

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
export default {
  /**
   *
   * ordersController.list() get list all order
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  list(req, res, next) {
    OrdersModel.find({ isDelete: false })
      .populate({ path: 'user', select: 'email' })
      .exec((err, orders) => {
        if (err) return next(err);
        res.json(orders);
        console.log(orders[0].user.email);
      });
  },

  /**
   *
   * ordersController.showuserorders() get order by user
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  showuserorders(req, res, next) {
    const userid = req.session.userId;
    // console.log(userid);
    OrdersModel.find({ user: userid, isDelete: false })
      .populate({ path: 'user', select: 'email' })
      .exec((err, orders) => {
        if (err) return next(err);
        res.json(orders);
        // console.log(orders[0].user.email);
      });
  },

  /**
   *
   * ordersController.show() get order by id
   * @param {*} req
   * @param {*} res
   */
  show(req, res) {
    const { id = null } = req.params;
    OrdersModel.findOne({ _id: id }, (err, orders) => {
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
   *
   * ordersController.create() create new order
   * @param {*} req
   * @param {*} res
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

    const orders = new OrdersModel({
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
   * ordersController.create()
   */
  createStripe(req, res) {
    const cart = new Cart(req.session.cart) || {};

    const cart1 = {
      products: cart.generateArray(), // do no co vai function trong doi tuong nay
      totalPrice: cart.totalPrice,
      totalQty: cart.totalQty,
    };

    const date = new Date();
    // const code = uniqid();
    // const stripe = require('stripe')('sk_test_FpM7twaUNDOUSDayjhUk2PKt');
    const stripe = Stripe('sk_test_FpM7twaUNDOUSDayjhUk2PKt');

    stripe.charges.create(
      {
        amount: cart1.totalPrice * 100,
        currency: 'usd',
        source: req.body.stripeToken, // obtained with Stripe.js
        description: 'Test charge',
      },
      (err, charge) => {
        // asynchronously called
        if (err) {
          console.log(err);
          return res.json({ code: 0, msg: 'checkout error!' }); // neu co loi thi tra lai code=0,con thanh cong thi code=1
        }
        const orders = new OrdersModel({
          code: charge.id,
          createdate: `${date}`,
          status: 'have bought',
          user: req.body.user, // user ở đây là id user.
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          addressShip: req.body.addressShip,
          phoneNumberShip: req.body.phoneNumberShip,
          cart: cart1,
        });

        orders.save((error, ordersData) => {
          if (err) {
            return res.status(500).json({
              message: 'Error when creating orders',
              error,
            });
          }
          return res.status(201).json({ code: 1, msg: 'checkout success!', data: ordersData });
        });
      },
    );
  },
  /**
   *
   * ordersController.update() update exit order
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    const { id } = req.params;
    OrdersModel.findOne({ _id: id }, (err, orders) => {
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
   *
   * ordersController.remove() remove exit order by id
   * @param {*} req
   * @param {*} res
   */
  remove(req, res) {
    const { id } = req.params;

    OrdersModel.findOne({ _id: id }, (err, order) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting order',
          error: err,
        });
      }
      order.isDelete = true;
      order.save((errorSave, data) => {
        if (errorSave) {
          return res.status(500).json({
            message: 'Error when update order',
            error: errorSave,
          });
        }
        return res.status(204).json(data);
      });
    });

    // OrdersModel.findByIdAndRemove(id, (err) => {
    //   if (err) {
    //     return res.status(500).json({
    //       message: 'Error when deleting the orders.',
    //       error: err,
    //     });
    //   }
    //   return res.status(204).json();
    // });
  },
};
