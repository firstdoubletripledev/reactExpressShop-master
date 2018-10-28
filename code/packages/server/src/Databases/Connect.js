import mongoose from 'mongoose';
import Promise from 'bluebird';

import { DatabaseUrl } from '../config';

function ConnectDatabase() {
  mongoose.connect(
    DatabaseUrl,
    { useNewUrlParser: true },
  );
  mongoose.Promise = Promise;

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    // we're connected!
    console.log(`connent success db to ${DatabaseUrl}`);
  });
}

const bluebird = Promise;

export { ConnectDatabase, bluebird };
