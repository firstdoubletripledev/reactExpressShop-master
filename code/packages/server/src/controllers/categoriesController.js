const CategoriesModel = require('../models/categoriesModel.js');

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
    CategoriesModel.find()
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

  topThree(req, res) {
    CategoriesModel.find()
      .limit(3)
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

    CategoriesModel.find()
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

  listSearchByName(req, res) {
    const perPage = 20;

    const { value = null, name = null, page = 1 } = req.params;
    CategoriesModel.findOne({ name, value })
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
            message: 'Error when getting products in categories.',
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
    CategoriesModel.findOne({ _id: id }, (err, categories) => {
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
    const categories = new CategoriesModel({
      name: req.body.name,
      value: req.body.value,
    });

    categories.save((err, categoriesCreate) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating categories',
          error: err,
        });
      }
      return res.status(201).json(categoriesCreate);
    });
  },

  /**
   * categoriesController.update()
   */
  update(req, res) {
    const { id = null } = req.params;
    CategoriesModel.findOne({ _id: id }, (err, categories) => {
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

      categories.save((error, categoriesUpdate) => {
        if (error) {
          return res.status(500).json({
            message: 'Error when updating categories.',
            error,
          });
        }

        return res.json(categoriesUpdate);
      });
    });
  },

  /**
   * categoriesController.remove()
   */
  remove(req, res) {
    const { id = null } = req.params;
    CategoriesModel.findByIdAndRemove(id, (err) => {
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
