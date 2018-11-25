import { hash } from 'argon2';
import Promise from 'bluebird';
import mongoose from 'mongoose';

import { DatabaseUrl } from '../config';
import UsersModel from '../models/usersModel';

function ConnectDatabase() {
  mongoose.connect(
    DatabaseUrl,
    { useNewUrlParser: true },
  );
  mongoose.Promise = Promise;

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    // we're connected!
    console.log(`connent success db to ${DatabaseUrl}`);
    const {
      ADMIN_EMAIL: email = 'admin@admin.com',
      ADMIN_PASSWORD: password = 'admin@admin.com',
    } = process.env;

    const userFind = await UsersModel.findOne({ email }).catch(error => console.log(error));
    const hashedPassword = await hash(password);

    if (userFind) {
      userFind.email = email;
      userFind.password = hashedPassword;
      userFind.role = 'admin';
      await userFind.save((err) => {
        if (err) {
          return console.log(err);
        }
        return console.log(email, password);
      });
    } else {
      const users = new UsersModel({
        email,
        password: hashedPassword,
        role: 'admin',
      });
      await users.save((err) => {
        if (err) {
          return console.log(err);
        }
        return console.log(email, password);
      });
    }
  });
}

const bluebird = Promise;

export { ConnectDatabase, bluebird };
