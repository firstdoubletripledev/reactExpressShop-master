const usersModel = require('../../models/usersModel.js');

function removeUser(req, res) {
  const { id } = req.params;
  usersModel.findByIdAndRemove(id, (err, usersData) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when deleting the users.',
        error: err,
      });
    }
    return res.status(204).json(usersData);
  });
}
exports.removeUser = removeUser;
