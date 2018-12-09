const ordersModel = require('../models/ordersModel.js');
var Cart = require('../models/cart.js');
var uniqid = require('uniqid');

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
module.exports = {
  /**
   * ordersController.list()
   */


  list(req, res) {
    ordersModel.find().populate({path:'user',select:'email'}).exec(function(err,orders){
      if (err) return next(err);
      res.json(orders);
      console.log(orders[0].user.email);
    });
  },

  showuserorders(req, res) {
    const userid = req.session.userId;
    //console.log(userid);
    ordersModel.find({user:userid}).populate({path:'user',select:'email'}).exec(function(err,orders){
      if (err) return next(err);
      res.json(orders);
      //console.log(orders[0].user.email);
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
    const id = req.params.id;
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
   
    var cart = new Cart(req.session.cart)||{};
    
     var cart1 = {
        products: cart.generateArray(), 
        totalPrice: cart.totalPrice,
        totalQty: cart.totalQty,

    };

  
     
        var date = new Date();
        var code = uniqid();

    const orders = new ordersModel({
      code : `${code}`,
      createdate : `${date}`,
      status : "noApprove",
      user : req.body.user, //user ở đây là id user.
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      addressShip  :  req.body.addressShip,
      phoneNumberShip : req.body.phoneNumberShip,
      cart:cart1
     
     

    });

    orders.save((err, orders) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating orders',
          error: err,
        });
      }
      return res.status(201).json(orders);
    });
  },
  /**
   * ordersController.create()
   */
  createStripe(req, res) {

   
    var cart = new Cart(req.session.cart)||{};
    
     var cart1 = {
        products: cart.generateArray(), // do no co vai function trong doi tuong nay 
        totalPrice: cart.totalPrice,
        totalQty: cart.totalQty,

    };

    var date = new Date();
    var code = uniqid();
    var stripe = require("stripe")(
      "sk_test_FpM7twaUNDOUSDayjhUk2PKt"
    );
    stripe.charges.create({
      amount: cart1.totalPrice * 100,
      currency: "usd",
      source: req.body.stripeToken, // obtained with Stripe.js
      description: "Test charge"
    }, function (err, charge) {
      // asynchronously called
      if (err) {
        console.log(err);
        return res.json({code:0,msg:"checkout error!"}) // neu co loi thi tra lai code=0,con thanh cong thi code=1
      }
      const orders = new ordersModel({
        code : charge.id,
        createdate : `${date}`,
        status : "have bought",
        user : req.body.user, //user ở đây là id user.
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        addressShip  :  req.body.addressShip,
        phoneNumberShip : req.body.phoneNumberShip,
        cart:cart1
       
      });
  
      orders.save((err, orders) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when creating orders',
            error: err,
          });
        }
        return res.status(201).json({code:1,msg:"checkout success!"});
      });

  
      
    });
  },
  /**
   * ordersController.update()
   */
  update(req, res) {
    const id = req.params.id;
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
      orders.firstName=req.body.firstName?req.body.firstName :orders.firstName;
      orders.lastName=req.body.lastName? req.body.lastName: orders.lastName;
      orders.addressShip=req.body.addressShip?req.body.addressShip: orders.addressShip;
      orders.phoneNumberShip=req.body.phoneNumberShip?req.body.phoneNumberShip : orders.phoneNumberShip;
      orders.save((err, orders) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating orders.',
            error: err,
          });
        }

        return res.json(orders);
      });
    });
  },

  /**
   * ordersController.remove()
   */
  remove(req, res) {
    const id = req.params.id;
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
