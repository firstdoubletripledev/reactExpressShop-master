// import hash, verify module from argon2
import { hash, verify } from 'argon2';

// import usersModel from model file
import usersModel from '../../models/usersModel';

/**
 *
 * updateUser() update User data by id
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function updateUser(req, res) {
  const { userid } = req.body.userid;

  const users = await usersModel
    .findOne({ _id: userid || '' })
    .catch(error => res.json({ code: 0, data: error, msg: 'Error when get user in database' }));

  if (!users) {
    return res.json({ code: 0, msg: 'Not found user' });
  }
  const valid = await verify(users.password, req.body.password || '');
  if (!valid) {
    return res.json({ code: 0, msg: 'Error old Password' });
  }

  const hashedPassword = await hash(req.body.newPassword || 'chungtadeptrai');

  users.email = req.body.email ? req.body.email : users.email;
  users.password = hashedPassword || users.password;
  users.address = req.body.address ? req.body.address : users.address;
  users.phonenumber = req.body.phonenumber ? req.body.phonenumber : users.phonenumber;
  users.role = req.body.role ? req.body.role : users.role;
  users.token = req.body.token ? req.body.token : users.token;
  users.firstName = req.body.firstName ? req.body.firstName : users.firstName;
  users.lastName = req.body.lastName ? req.body.lastName : users.lastName;
  users.birthday = req.body.birthday ? req.body.birthday : users.birthday;

  users.save((errSave, usersData) => {
    if (errSave) {
      return res.status(500).json({
        message: 'Error when updating users.',
        error: errSave,
      });
    }
    return res.json(usersData);
  });
}

export { updateUser };
