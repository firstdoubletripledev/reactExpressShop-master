import ProductsModel from '../models/productsModel';
import CategoriesModel from '../models/categoriesModel';

/**
 * productsController.js
 *
 * @description :: Server-side logic for managing productss.
 */
export default {
  /**
   * productsController.list() get list all product
   * @param {*} req
   * @param {*} res
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

  /**
   *
   * productsController.listSearchByName() get list product search by name
   * @param {*} req
   * @param {*} res
   * @returns
   */
  listSearchByName(req, res) {
    const { searchvalue = null } = req.params;
    if (searchvalue !== null) {
      const { perpage = 20, page = 1 } = req.params;

      const perPage = Number(perpage);

      ProductsModel.find({ $text: { $search: searchvalue } })
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
    } else {
      return res.json([]);
    }
    return null;
  },

  /**
   *
   * productsController.listPartition() get list product by page
   * @param {*} req
   * @param {*} res
   */
  listPartition(req, res) {
    const { perpage = 20, page = 1 } = req.params;
    const perPage = Number(perpage);
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
   *
   * productsController.listPartitionSortByName() get list product by name
   * @param {*} req
   * @param {*} res
   */
  listPartitionSortByName(req, res) {
    const perPage = 20;
    const { page = 1 } = req.params;

    ProductsModel.find()
      .sort({
        name: 1,
      })
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
   *
   * productsController.listPartitionSortByNameDesc() get list product by name DESC
   * @param {*} req
   * @param {*} res
   */
  listPartitionSortByNameDesc(req, res) {
    const perPage = 20;
    const { page = 1 } = req.params;

    ProductsModel.find()
      .sort({
        name: -1,
      })
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
   *
   * productsController.listPartitionSortByPrice() get list product by price
   * @param {*} req
   * @param {*} res
   */
  listPartitionSortByPrice(req, res) {
    const perPage = 20;
    const { page = 1 } = req.params;

    ProductsModel.find()
      .sort({
        price: 1,
      })
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
   *
   * productsController.listPartitionSortByPricedesc() get list product by price Desc
   * @param {*} req
   * @param {*} res
   */
  listPartitionSortByPricedesc(req, res) {
    const perPage = 20;
    const { page = 1 } = req.params;

    ProductsModel.find()
      .sort({
        price: -1,
      })
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
   *
   * productsController.show()
   * @param {*} req
   * @param {*} res
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
   *
   * productsController.create() create new product
   * @param {*} req
   * @param {*} res
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
              products: [productsData._id],
            });
            categorySave.save((error1, dataCategory) => {
              if (error1) {
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
            categories.products.push(productsData._id);
            categories.save((error2) => {
              if (error2) {
                return res.status(500).json({
                  message: 'Error when update category products',
                  error: error2,
                });
              }
            });
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
  },

  /**
   *
   * productsController.update() update product by id
   * @param {*} req
   * @param {*} res
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
                products: [productsData._id],
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
              categories.products.push(productsData._id);
              categories.save((error2) => {
                if (error2) {
                  return res.status(500).json({
                    message: 'Error when update category products',
                    error: error2,
                  });
                }
              });

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
   *
   * productsController.remove() remove product by id
   * @param {*} req
   * @param {*} res
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
