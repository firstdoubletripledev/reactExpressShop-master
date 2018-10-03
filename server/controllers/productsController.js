var productsModel = require('../models/productsModel.js');

/**
 * productsController.js
 *
 * @description :: Server-side logic for managing productss.
 */
module.exports = {

    /**
     * productsController.list()
     */
    list: function (req, res) {
        productsModel.find(function (err, productss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting products.',
                    error: err
                });
            }
            return res.json(productss);
        });
    },

    /**
     * productsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        productsModel.findOne({_id: id}, function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting products.',
                    error: err
                });
            }
            if (!products) {
                return res.status(404).json({
                    message: 'No such products'
                });
            }
            return res.json(products);
        });
    },

    /**
     * productsController.create()
     */
    create: function (req, res) {
        var products = new productsModel({
			code : req.body.code,
			name : req.body.name,
			price : req.body.price,
			description : req.body.description,
			stock : req.body.stock,
			category : req.body.category,
			status : req.body.status

        });

        products.save(function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating products',
                    error: err
                });
            }
            return res.status(201).json(products);
        });
    },

    /**
     * productsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        productsModel.findOne({_id: id}, function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting products',
                    error: err
                });
            }
            if (!products) {
                return res.status(404).json({
                    message: 'No such products'
                });
            }

            products.code = req.body.code ? req.body.code : products.code;
			products.name = req.body.name ? req.body.name : products.name;
			products.price = req.body.price ? req.body.price : products.price;
			products.description = req.body.description ? req.body.description : products.description;
			products.stock = req.body.stock ? req.body.stock : products.stock;
			products.category = req.body.category ? req.body.category : products.category;
			products.status = req.body.status ? req.body.status : products.status;
			
            products.save(function (err, products) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating products.',
                        error: err
                    });
                }

                return res.json(products);
            });
        });
    },

    /**
     * productsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        productsModel.findByIdAndRemove(id, function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the products.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
