var ordersModel = require('../models/ordersModel.js');

/**
 * ordersController.js
 *
 * @description :: Server-side logic for managing orderss.
 */
module.exports = {

    /**
     * ordersController.list()
     */
    list: function (req, res) {
        ordersModel.find(function (err, orderss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders.',
                    error: err
                });
            }
            return res.json(orderss);
        });
    },

    /**
     * ordersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ordersModel.findOne({_id: id}, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders.',
                    error: err
                });
            }
            if (!orders) {
                return res.status(404).json({
                    message: 'No such orders'
                });
            }
            return res.json(orders);
        });
    },

    /**
     * ordersController.create()
     */
    create: function (req, res) {
        var orders = new ordersModel({
			code : req.body.code,
			createdate : req.body.createdate,
			status : req.body.status,
			price : req.body.price,
			user : req.body.user,
			products : req.body.products

        });

        orders.save(function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating orders',
                    error: err
                });
            }
            return res.status(201).json(orders);
        });
    },

    /**
     * ordersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ordersModel.findOne({_id: id}, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting orders',
                    error: err
                });
            }
            if (!orders) {
                return res.status(404).json({
                    message: 'No such orders'
                });
            }

            orders.code = req.body.code ? req.body.code : orders.code;
			orders.createdate = req.body.createdate ? req.body.createdate : orders.createdate;
			orders.status = req.body.status ? req.body.status : orders.status;
			orders.price = req.body.price ? req.body.price : orders.price;
			orders.user = req.body.user ? req.body.user : orders.user;
			orders.products = req.body.products ? req.body.products : orders.products;
			
            orders.save(function (err, orders) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating orders.',
                        error: err
                    });
                }

                return res.json(orders);
            });
        });
    },

    /**
     * ordersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ordersModel.findByIdAndRemove(id, function (err, orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the orders.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
