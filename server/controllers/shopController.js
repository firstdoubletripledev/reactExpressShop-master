import shopModel from '../models/shopModel.js';

/**
 * shopController.js
 *
 * @description :: Server-side logic for managing shops.
 */
export default {

    /**
     * shopController.list()
     */
    list(req, res) {
        shopModel.find((err, shops) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting shop.',
                    error: err
                });
            }
            return res.json(shops);
        });
    },

    /**
     * shopController.show()
     */
    show(req, res) {
        const id = req.params.id;
        shopModel.findOne({_id: id}, (err, shop) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting shop.',
                    error: err
                });
            }
            if (!shop) {
                return res.status(404).json({
                    message: 'No such shop'
                });
            }
            return res.json(shop);
        });
    },

    /**
     * shopController.create()
     */
    create(req, res) {
        const shop = new shopModel({
			name : req.body.name,
			slogan : req.body.slogan,
			address : req.body.address,
			phonenumber : req.body.phonenumber,
			facebook : req.body.facebook,
			instagram : req.body.instagram,
			twitter : req.body.twitter

        });

        shop.save((err, shop) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating shop',
                    error: err
                });
            }
            return res.status(201).json(shop);
        });
    },

    /**
     * shopController.update()
     */
    update(req, res) {
        const id = req.params.id;
        shopModel.findOne({_id: id}, (err, shop) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting shop',
                    error: err
                });
            }
            if (!shop) {
                return res.status(404).json({
                    message: 'No such shop'
                });
            }

            shop.name = req.body.name ? req.body.name : shop.name;
			shop.slogan = req.body.slogan ? req.body.slogan : shop.slogan;
			shop.address = req.body.address ? req.body.address : shop.address;
			shop.phonenumber = req.body.phonenumber ? req.body.phonenumber : shop.phonenumber;
			shop.facebook = req.body.facebook ? req.body.facebook : shop.facebook;
			shop.instagram = req.body.instagram ? req.body.instagram : shop.instagram;
			shop.twitter = req.body.twitter ? req.body.twitter : shop.twitter;
			
            shop.save((err, shop) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating shop.',
                        error: err
                    });
                }

                return res.json(shop);
            });
        });
    },

    /**
     * shopController.remove()
     */
    remove(req, res) {
        const id = req.params.id;
        shopModel.findByIdAndRemove(id, (err, shop) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the shop.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
