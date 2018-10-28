const usersModel = require('../../models/usersModel.js');

function showUser(req, res) {
  const { id } = req.params;
  usersModel.findOne({ _id: id }, (err, users) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting users.',
        error: err,
      });
    }
    if (!users) {
      return res.status(404).json({
        message: 'No such users',
      });
    }
    return res.json(users);
  });
}
exports.showUser = showUser;
