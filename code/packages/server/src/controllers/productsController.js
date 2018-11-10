const ProductsModel = require('../models/productsModel.js');
const CategoriesModel = require('../models/categoriesModel.js');

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
    ProductsModel.find()
      .populate('category')
      .exec((err, productss) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting products.',
            error: err,
          });
        }
        return res.json(productss);
      });
  },

  listPartition(req, res) {
    const perPage = 20;
    const page = req.params.page || 1;

    ProductsModel.find()
      .skip(perPage * page - perPage)
      .limit(perPage)
      .populate('category')
      .exec((err, productss) => {
        if (err) {
          return res.status(500).json({
            message: 'Error when getting products.',
            error: err,
          });
        }

        ProductsModel.count().exec((errCount, count) => {
          if (errCount) {
            return res.status(500).json({
              message: 'Error when count products.',
              error: errCount,
            });
          }

          return res.json({
            data_products: productss,
            current: page,
            pages: Math.ceil(count / perPage),
          });
        });
      });
  },

  /**
   * productsController.show()
   */
  show(req, res) {
    const { id } = req.params;
    ProductsModel.findOne({ _id: id })
      .populate('category')
      .exec((err, products) => {
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
    const products = new ProductsModel({
      code: req.body.code,
      name: req.body.name,
      pathImg: req.body.pathImg,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      // category: req.body.category,
      status: req.body.status,
      galleryImage: req.body.galleryImage,
      discountPrice: req.body.discountPrice,
    });

    products.save((error, productsData) => {
      if (error) {
        return res.status(500).json({
          message: 'Error when updating products.',
          error,
        });
      }
      console.log(req.body.category.name, req.body.category.value);
      if (!req.body || !req.body.category || !req.body.category.name || !req.body.category.value) {
        return res.status(201).json(productsData);
      }
      CategoriesModel.findOne(
        { name: req.body.category.name, value: req.body.category.value },
        (error3, categories) => {
          if (error3) {
            return res.status(500).json({
              message: 'Error when getting categories.',
              error: error3,
            });
          }
          if (!categories) {
            const categorySave = new CategoriesModel({
              name: req.body.category.name,
              value: req.body.category.value,
            });
            categorySave.save((error1, dataCategory) => {
              if (err) {
                return res.status(501).json({
                  message: 'error when save category',
                  error: error1,
                });
              }
              // thats it!

              productsData.category.push(dataCategory._id);
              productsData.save((error2, productsDataNew) => {
                if (error2) {
                  return res.status(500).json({
                    message: 'Error when update category products',
                    error: error2,
                  });
                }
                return res.status(201).json(productsDataNew);
              });
            });
          }
          productsData.category.push(categories._id);
          productsData.save((error2, productsDataNew) => {
            if (error2) {
              return res.status(500).json({
                message: 'Error when update category products',
                error: error2,
              });
            }
            return res.status(201).json(productsDataNew);
          });
        },
      );
    });
  },

  /**
   * productsController.update()
   */
  update(req, res) {
    const { id } = req.params;
    ProductsModel.findOne({ _id: id }, (err, products) => {
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
      products.pathImg = req.body.pathImg ? req.body.pathImg : products.pathImg;
      products.price = req.body.price ? req.body.price : products.price;
      products.description = req.body.description ? req.body.description : products.description;
      products.stock = req.body.stock ? req.body.stock : products.stock;
      products.category = products.category;
      products.status = req.body.status ? req.body.status : products.status;
      products.discountPrice = req.body.discountPrice
        ? req.body.discountPrice
        : products.discountPrice;
      products.galleryImage = req.body.galleryImage ? req.body.galleryImage : products.galleryImage;

      products.save((error, productsData) => {
        if (error) {
          return res.status(500).json({
            message: 'Error when updating products.',
            error,
          });
        }
        console.log(req.body.category.name, req.body.category.value);
        if (
          !req.body
          || !req.body.category
          || !req.body.category.name
          || !req.body.category.value
        ) {
          return res.status(201).json(productsData);
        }
        CategoriesModel.findOne(
          { name: req.body.category.name, value: req.body.category.value },
          (error3, categories) => {
            if (error3) {
              return res.status(500).json({
                message: 'Error when getting categories.',
                error: error3,
              });
            }
            if (categories === null) {
              const categorySave = new CategoriesModel({
                name: req.body.category.name,
                value: req.body.category.value,
              });
              categorySave.save((error1, dataCategory) => {
                if (err) {
                  return res.status(501).json({
                    message: 'error when save category',
                    error: error1,
                  });
                }
                // thats it!

                productsData.category.push(dataCategory._id);
                productsData.save((error2, productsDataNew) => {
                  if (error2) {
                    return res.status(500).json({
                      message: 'Error when update category products',
                      error: error2,
                    });
                  }
                  return res.status(201).json(productsDataNew);
                });
              });
            } else {
              productsData.category.push(categories._id);
              productsData.save((error2, productsDataNew) => {
                if (error2) {
                  return res.status(500).json({
                    message: 'Error when update category products',
                    error: error2,
                  });
                }
                return res.status(201).json(productsDataNew);
              });
            }
          },
        );
      });
    });
  },

  /**
   * productsController.remove()
   */
  remove(req, res) {
    const { id } = req.params;
    ProductsModel.findByIdAndRemove(id, (err) => {
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
