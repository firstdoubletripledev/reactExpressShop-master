const usersModel = require('../../models/usersModel.js');

function updateUser(req, res) {
  const { id } = req.params;
  usersModel.findOne({ _id: id }, (err, users) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting users',
        error: err,
      });
    }
    if (!users) {
      return res.status(404).json({
        message: 'No such users',
      });
    }
    users.email = req.body.email ? req.body.email : users.email;
    users.password = req.body.password ? req.body.password : users.password;
    users.address = req.body.address ? req.body.address : users.address;
    users.phonenumber = req.body.phonenumber ? req.body.phonenumber : users.phonenumber;
    users.role = req.body.role ? req.body.role : users.role;
    users.token = req.body.token ? req.body.token : users.token;
    users.save((errSave, usersData) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when updating users.',
          error: errSave,
        });
      }
      return res.json(usersData);
    });
    return users;
  });
}
exports.updateUser = updateUser;
