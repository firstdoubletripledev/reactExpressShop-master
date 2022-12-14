// import usersModel from model file
import usersModel from '../../models/usersModel';

/**
 *
 * listUser() get list all user
 * @param {*} req
 * @param {*} res
 */
function listUser(req, res) {
  usersModel.find({ isDelete: false, role: 'user' }, (err, userss) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when getting users.',
        error: err,
      });
    }
    return res.json(userss);
  });
}
export { listUser };
