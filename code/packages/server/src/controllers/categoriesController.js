var categoriesModel = require('../models/categoriesModel.js');

/**
 * categoriesController.js
 *
 * @description :: Server-side logic for managing categoriess.
 */
module.exports = {

    /**
     * categoriesController.list()
     */
    list: function (req, res) {
        categoriesModel.find(function (err, categoriess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories.',
                    error: err
                });
            }
            return res.json(categoriess);
        });
    },

    /**
     * categoriesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        categoriesModel.findOne({_id: id}, function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories.',
                    error: err
                });
            }
            if (!categories) {
                return res.status(404).json({
                    message: 'No such categories'
                });
            }
            return res.json(categories);
        });
    },

    /**
     * categoriesController.create()
     */
    create: function (req, res) {
        var categories = new categoriesModel({
			name : req.body.name

        });

        categories.save(function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating categories',
                    error: err
                });
            }
            return res.status(201).json(categories);
        });
    },

    /**
     * categoriesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        categoriesModel.findOne({_id: id}, function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting categories',
                    error: err
                });
            }
            if (!categories) {
                return res.status(404).json({
                    message: 'No such categories'
                });
            }

            categories.name = req.body.name ? req.body.name : categories.name;
			
            categories.save(function (err, categories) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating categories.',
                        error: err
                    });
                }

                return res.json(categories);
            });
        });
    },

    /**
     * categoriesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        categoriesModel.findByIdAndRemove(id, function (err, categories) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the categories.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
