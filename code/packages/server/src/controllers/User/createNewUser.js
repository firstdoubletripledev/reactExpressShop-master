// import hash module from argon2
import { hash } from 'argon2';

// import isEmpty module from ramda
import { isEmpty } from 'ramda';

// import usersModel from model file
import UsersModel from '../../models/usersModel';

/**
 *
 * createNewUser() create new User
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function createNewUser(req, res) {
  const {
    email = '', password = '', address = '', phonenumber = '', role = 'user',
  } = req.body;

  if (isEmpty(req.body)) {
    res.status(201).json({ code: 0, msg: 'Body empty' });
    throw new Error('Body empty');
  }
  const hashedPassword = await hash(password);

  const user = await UsersModel.findOne({ email }).catch(error => res.json({ code: 0, data: error, msg: 'Error when get user in database' }));
  if (user) {
    return res.json({ code: 0, msg: 'This Email is already taken. Try another Email' });
  }

  const users = new UsersModel({
    email,
    password: hashedPassword,
    address,
    phonenumber,
    role,
  });
  await users.save((err, usersData) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when creating users',
        error: err,
      });
    }
    return res.status(201).json({ code: 1, msg: 'success', data: { email: usersData.email } });
  });
  return true;
}
export { createNewUser };
