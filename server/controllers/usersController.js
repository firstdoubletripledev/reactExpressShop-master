var usersModel = require('../models/usersModel.js');

/**
 * usersController.js
 *
 * @description :: Server-side logic for managing userss.
 */
module.exports = {

    /**
     * usersController.list()
     */
    list: function (req, res) {
        usersModel.find(function (err, userss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting users.',
                    error: err
                });
            }
            return res.json(userss);
        });
    },

    /**
     * usersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        usersModel.findOne({_id: id}, function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting users.',
                    error: err
                });
            }
            if (!users) {
                return res.status(404).json({
                    message: 'No such users'
                });
            }
            return res.json(users);
        });
    },

    /**
     * usersController.create()
     */
    create: function (req, res) {
        var users = new usersModel({
			name : req.body.name,
			password : req.body.password,
			address : req.body.address,
			phonenumber : req.body.phonenumber,
			role : req.body.role,
			token : req.body.token

        });

        users.save(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating users',
                    error: err
                });
            }
            return res.status(201).json(users);
        });
    },

    /**
     * usersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        usersModel.findOne({_id: id}, function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting users',
                    error: err
                });
            }
            if (!users) {
                return res.status(404).json({
                    message: 'No such users'
                });
            }

            users.name = req.body.name ? req.body.name : users.name;
			users.password = req.body.password ? req.body.password : users.password;
			users.address = req.body.address ? req.body.address : users.address;
			users.phonenumber = req.body.phonenumber ? req.body.phonenumber : users.phonenumber;
			users.role = req.body.role ? req.body.role : users.role;
			users.token = req.body.token ? req.body.token : users.token;
			
            users.save(function (err, users) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating users.',
                        error: err
                    });
                }

                return res.json(users);
            });
        });
    },

    /**
     * usersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        usersModel.findByIdAndRemove(id, function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the users.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
