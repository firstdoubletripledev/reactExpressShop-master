// import usersModel from model file
import usersModel from '../../models/usersModel';

/**
 *
 * removeUser() remove User by id
 * @param {*} req
 * @param {*} res
 */
function removeUser(req, res) {
  const { id } = req.params;

  usersModel.findOne({ _id: id }, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting user',
        error: err,
      });
    }
    user.isDelete = true;
    user.save((errorSave, data) => {
      if (errorSave) {
        return res.status(500).json({
          message: 'Error when update user',
          error: errorSave,
        });
      }
      return res.status(204).json(data);
    });
  });

  // usersModel.findByIdAndRemove(id, (err, usersData) => {
  //   if (err) {
  //     return res.status(500).json({
  //       message: 'Error when deleting the users.',
  //       error: err,
  //     });
  //   }
  //   return res.status(204).json(usersData);
  // });
}
export { removeUser };
