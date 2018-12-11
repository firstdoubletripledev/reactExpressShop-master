// import jwt module from jsonwebtoken
import jwt from 'jsonwebtoken';

// import usersModel from model file
import usersModel from '../../models/usersModel';

/**
 *
 * meUser() get User by session
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function meUser(req, res) {
  const { SECRET_KEY: secretKey } = process.env;

  const { userId } = req.session;
  if (!userId) {
    if (
      req.headers
      && req.headers.authorization
      && req.headers.authorization.split(' ')[0] === 'JWT'
    ) {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1];

      const legit = jwt.verify(token, secretKey);
      return res.json({ code: 1, data: legit, msg: 'Success' });
    }

    return res.json({ code: 0, msg: 'Not found please login again' });
  }
  const user = await usersModel
    .findOne({ _id: userId })
    .catch(error => res.json({ code: 0, data: error, msg: 'Error when get user in database' }));
  if (!user) {
    return res.json({ code: 0, msg: 'No User found' });
  }
  return res.json({
    code: 1,
    data: { email: user.email, role: user.role },
    msg: 'Success',
  });
}

export { meUser };
