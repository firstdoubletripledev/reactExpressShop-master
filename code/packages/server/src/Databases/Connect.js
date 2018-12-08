// import Promise module from bluebird
import Promise from 'bluebird';

// import mongoose module from mongoose
import mongoose from 'mongoose';

// import createAdminUser function
import { createAdminUser } from './createAdminUser';

// Create new mongoose connection
const db = mongoose.connection;

/**
 * Function ConnectDatabase to connect to database and create admin account
 *
 */
function ConnectDatabase() {
  // Use bluebird for Promise module in mongoose
  mongoose.Promise = Promise;

  // Get DATABASE_URL from .env
  const { DATABASE_URL: DatabaseUrl } = process.env;

  // Connect to DatabaseUrl
  mongoose.connect(
    DatabaseUrl,
    { useNewUrlParser: true },
  );

  // Check if connect error
  db.on('error', console.error.bind(console, 'connection error:'));

  // Check if connect open ( success )
  db.once('open', async () => {
    // we're connected!
    console.log(`connent success db to ${DatabaseUrl}`);

    // Get ADMIN_EMAIL and ADMIN_PASSWORD or use hard data for admin account
    const {
      ADMIN_EMAIL: email = 'admin@admin.com',
      ADMIN_PASSWORD: password = 'admin@admin.com',
    } = process.env;

    // Create Admin account
    await createAdminUser(email, password);
  });
}

// Export ConnectDatabase, db module
export { ConnectDatabase, db };
