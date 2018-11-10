const categoriesModel = require('../models/categoriesModel.js');

/**
 * categoriesController.js
 *
 * @description :: Server-side logic for managing categoriess.
 */
module.exports = {
  /**
   * categoriesController.list()
   */
  list(req, res) {
    categoriesModel
      .find()
      .populate('products')
      .exec((err, categoriess) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting categories.',
            error: err,
          });
        }
        return res.json(categoriess);
      });
  },

  listPage(req, res) {
    const perPage = 20;

    const { page = 1 } = req.params;

    categoriesModel
      .find()
      .populate({
        path: 'products',
        options: {
          skip: perPage * page - perPage,
          limit: perPage,
        },
      })
      .exec((err, categoriess) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting categories.',
            error: err,
          });
        }
        return res.json(categoriess);
      });
  },

  /**
   * categoriesController.show()
   */
  show(req, res) {
    const { id } = req.params;
    categoriesModel.findOne({ _id: id }, (err, categories) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting categories.',
          error: err,
        });
      }
      if (!categories) {
        return res.status(404).json({
          message: 'No such categories',
        });
      }
      return res.json(categories);
    });
  },

  /**
   * categoriesController.create()
   */
  create(req, res) {
    const categories = new categoriesModel({
      name: req.body.name,
      value: req.body.value,
    });

    categories.save((err, categories) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating categories',
          error: err,
        });
      }
      return res.status(201).json(categories);
    });
  },

  /**
   * categoriesController.update()
   */
  update(req, res) {
    const id = req.params.id;
    categoriesModel.findOne({ _id: id }, (err, categories) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting categories',
          error: err,
        });
      }
      if (!categories) {
        return res.status(404).json({
          message: 'No such categories',
        });
      }

      categories.name = req.body.name ? req.body.name : categories.name;
      categories.value = req.body.value ? req.body.value : categories.value;

      categories.save((err, categories) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating categories.',
            error: err,
          });
        }

        return res.json(categories);
      });
    });
  },

  /**
   * categoriesController.remove()
   */
  remove(req, res) {
    const id = req.params.id;
    categoriesModel.findByIdAndRemove(id, (err, categories) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the categories.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },
};
