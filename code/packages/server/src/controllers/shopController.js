import ShopModel from '../models/shopModel';

/**
 * shopController.js
 *
 * @description :: Server-side logic for managing shops.
 */
export default {
  /**
   * shopController.list() find all shop info
   * @param {*} req
   * @param {*} res
   */
  list(req, res) {
    ShopModel.find((err, shops) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting shop.',
          error: err,
        });
      }
      return res.json(shops);
    });
  },

  /**
   * shopController.show() get shop by id
   * @param {*} req
   * @param {*} res
   */
  show(req, res) {
    const { id } = req.params;
    ShopModel.findOne({ _id: id }, (err, shop) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting shop.',
          error: err,
        });
      }
      if (!shop) {
        return res.status(404).json({
          message: 'No such shop',
        });
      }
      return res.json(shop);
    });
  },

  /**
   * shopController.create() create new shop
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    const shop = new ShopModel({
      name: req.body.name,
      slogan: req.body.slogan,
      address: req.body.address,
      phonenumber: req.body.phonenumber,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      twitter: req.body.twitter,
    });

    shop.save((err, shopData) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating shop',
          error: err,
        });
      }
      return res.status(201).json(shopData);
    });
  },

  /**
   * shopController.update() update exit shop
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    const { id } = req.params;
    ShopModel.findOne({ _id: id }, (err, shop = {}) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting shop',
          error: err,
        });
      }
      if (!shop) {
        return res.status(404).json({
          message: 'No such shop',
        });
      }

      shop.name = req.body.name ? req.body.name : shop.name;
      shop.slogan = req.body.slogan ? req.body.slogan : shop.slogan;
      shop.address = req.body.address ? req.body.address : shop.address;
      shop.phonenumber = req.body.phonenumber ? req.body.phonenumber : shop.phonenumber;
      shop.facebook = req.body.facebook ? req.body.facebook : shop.facebook;
      shop.instagram = req.body.instagram ? req.body.instagram : shop.instagram;
      shop.twitter = req.body.twitter ? req.body.twitter : shop.twitter;

      shop.save((errSave, shopData) => {
        if (errSave) {
          return res.status(500).json({
            message: 'Error when updating shop.',
            error: errSave,
          });
        }

        return res.json(shopData);
      });
      return shop;
    });
  },

  /**
   * shopController.remove() delete shop by id
   * @param {*} req
   * @param {*} res
   */
  remove(req, res) {
    const { id } = req.params;
    ShopModel.findByIdAndRemove(id, (err, shopData) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the shop.',
          error: err,
        });
      }
      return res.status(204).json(shopData);
    });
  },
};
