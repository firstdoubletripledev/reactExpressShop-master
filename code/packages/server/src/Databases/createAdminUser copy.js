import { hash } from 'argon2';

import UsersModel from '../models/usersModel';

export const createAdminUser = async (email, password) => {
  const userFind = await UsersModel.findOne({ email }).catch(error => console.log(error));
  const hashedPassword = await hash(password);

  if (userFind) {
    userFind.email = email;
    userFind.password = hashedPassword;
    userFind.role = 'admin';
    await userFind.save((err, usersData) => {
      if (err) {
        return console.log(err);
      }
      return console.log(email, password, usersData);
    });
  } else {
    const users = new UsersModel({
      email,
      password: hashedPassword,
      role: 'admin',
    });
    await users.save((err, usersData) => {
      if (err) {
        return console.log(err);
      }
      return console.log(email, password, usersData);
    });
  }
};
