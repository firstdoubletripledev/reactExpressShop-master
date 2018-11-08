const productsModel = require('../models/productsModel.js');

/**
 * productsController.js
 *
 * @description :: Server-side logic for managing productss.
 */
module.exports = {
  /**
   * productsController.list()
   */
  list(req, res) {
    productsModel.find((err, productss) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting products.',
          error: err,
        });
      }
      return res.json(productss);
    });
  },

  /**
   * productsController.show()
   */
  show(req, res) {
    const id = req.params.id;
    productsModel.findOne({ _id: id }, (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting products.',
          error: err,
        });
      }
      if (!products) {
        return res.status(404).json({
          message: 'No such products',
        });
      }
      return res.json(products);
    });
  },

  /**
   * productsController.create()
   */
  create(req, res) {
    const products = new productsModel({
      code: req.body.code,
      name: req.body.name,
      pathImg:req.body.pathImg,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      category: req.body.category,
      status: req.body.status,
    });

    products.save((err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating products',
          error: err,
        });
      }
      return res.status(201).json(products);
    });
  },


  /**
   * productsController.update()
   */
  update(req, res) {
    const id = req.params.id;
    productsModel.findOne({ _id: id }, (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting products',
          error: err,
        });
      }
      if (!products) {
        return res.status(404).json({
          message: 'No such products',
        });
      }

      products.code = req.body.code ? req.body.code : products.code;
      products.name = req.body.name ? req.body.name : products.name;
      products.pathImg = req.body.pathImg ?req.body.pathImg : products.pathImg;
      products.price = req.body.price ? req.body.price : products.price;
      products.description = req.body.description ? req.body.description : products.description;
      products.stock = req.body.stock ? req.body.stock : products.stock;
      products.category = req.body.category ? req.body.category : products.category;
      products.status = req.body.status ? req.body.status : products.status;

      products.save((err, products) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating products.',
            error: err,
          });
        }

        return res.json(products);
      });
    });
  },

  /**
   * productsController.remove()
   */
  remove(req, res) {
    const id = req.params.id;
    productsModel.findByIdAndRemove(id, (err, products) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the products.',
          error: err,
        });
      }
      return res.status(204).json();
    });
  },
};
