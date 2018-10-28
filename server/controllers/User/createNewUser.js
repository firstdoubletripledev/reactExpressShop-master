import { isEmpty } from 'ramda';
import { hash } from 'argon2';

const UsersModel = require('../../models/usersModel.js');

async function createNewUser(req, res) {
  const { email = '', password = '' } = req.body;

  if (isEmpty(req.body)) {
    res.status(201).json({ code: 0, msg: 'Body empty' });
    throw new Error('Body empty');
  }
  const hashedPassword = await hash(password);

  const users = new UsersModel({
    email,
    password: hashedPassword,
  });
  await users.save((err, usersData) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when creating users',
        error: err,
      });
    }
    return res.status(201).json(usersData);
  });
}
export { createNewUser };
