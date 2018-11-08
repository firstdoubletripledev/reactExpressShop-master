var Cart = require('../models/cart.js');
var Product = require("../models/productsModel.js")

/**
 * cartController.js
 *
 * @description :: Server-side logic for managing carts.
 */
module.exports = {
    shoppingcart:function (req, res) { 
        if (!req.session.cart) {
          //return res.render('shop/shopping-cart', { products: null });
          return res.json({cart:null});
        }
        var cart = new Cart(req.session.cart);
       return res.json(cart);
        //res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice, successMgs: successMgs, noMessages: !successMgs });
      },
    addToCart:function(req,res){
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {}); // xem thử trong session có cart chwua nếu chưa thì cho cái cart đó là 
        Product.findById(productId, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories.',
                    error: err
                });
            }
          //console.log(req.user);
      
          cart.add(product, productId);
          req.session.cart = cart;
          console.log(req.session.cart);
          return res.json(req.session.cart);

          //console.log(product);
          
        });
    },

    reduce: function(req,res){
        var productId = req.params.id;
         var cart = new Cart(req.session.cart ? req.session.cart:{});

        cart.reduceByOne(productId);

        req.session.cart = cart;
        return res.json(cart);
        //res.redirect('/shopping-cart');
    },

    remove:function(req,res,next){
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart:{});
      
        cart.removeItem(productId);
      
        req.session.cart = cart;
        return res.json(cart);
       // res.redirect('/shopping-cart');
        }

  
};
