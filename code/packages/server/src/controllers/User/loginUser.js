import { verify } from 'argon2';
import jwt from 'jsonwebtoken';

import { secretKey } from '../../config';

const usersModel = require('../../models/usersModel.js');

async function loginUser(req, res) {
  const { email = '', password = '' } = req.body;
  const user = await usersModel.findOne({ email }).catch((error) => {
    res.json({ code: 0, msg: 'Error when get user in database' });
    throw new Error(error);
  });
  if (!user) {
    res.json({ code: 0, msg: 'Not found email' });
    throw new Error('Not found email');
  }
  const valid = await verify(user.password, password);
  if (!valid) {
    res.json({ code: 0, msg: 'Error Password' });
    throw new Error('Error Password');
  }
  const emailJwt = { email: user.email, role: user.role };
  const token = jwt.sign(emailJwt, secretKey);
  req.session.userId = user._id;
  res.json({
    code: 1,
    // giang them khi dang nhap thì tra ve userid nua
    data: { email: user.email, userId: user._id, role: user.role },
    token,
    msg: 'Success',
  });
  return user;
}

export { loginUser };
