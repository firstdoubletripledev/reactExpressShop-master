// import babel polyfill module
import '@babel/polyfill';

// import bodyParser module
import bodyParser from 'body-parser';

// import compression module
import compression from 'compression';

// import cookieParser module
import cookieParser from 'cookie-parser';

// import express module
import express from 'express';

// import express-session module
import session from 'express-session';
import path from 'path';

// import ConnectDatabase and db from folder Databases->Connect
import { ConnectDatabase, db } from './Databases/Connect';

// import categoriesRoutes for api
import categoriesRoutes from './routes/categoriesRoutes';

// import ordersRoutes for api
import ordersRoutes from './routes/ordersRoutes';

// import productsRoutes for api
import productsRoutes from './routes/productsRoutes';

// import shopRoutes for api
import shopRoutes from './routes/shopRoutes';

// import submitNewRoutes for api
import submitNewRoutes from './routes/submitNewRoutes';

// import usersRoutes for api
import usersRoutes from './routes/usersRoutes';

// import cartRoutes for api
import cartRoutes from './routes/cartRoutes';

// Create new MongoStore for session
const MongoStore = require('connect-mongo')(session);

// Get SECRET_KEY from .env
const { SECRET_KEY: secretKey } = process.env;

/**
 * Function startApp create web app using expressjs
 */
const startApp = () => {
  // Connect to database ( mlab )
  ConnectDatabase();

  // create new app
  const app = express();

  // Enable compression ( gzip ) for app
  app.use(compression());

  // Enable cookieParser for app
  app.use(cookieParser());

  // Enable session for app
  app.use(
    session({
      secret: secretKey,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: db }),
      cookie: { maxAge: 180 * 60 * 1000 },
    }),
  );

  // Enable bodyParser-urlencoded for app
  app.use(bodyParser.urlencoded({ extended: false }));
  // Enable bodyParser-json for app
  app.use(bodyParser.json());

  // Get port from .env
  const port = process.env.PORT || 5000;

  // User categoriesRoutes for router /api/categories
  app.use('/api/categories', categoriesRoutes);

  // User ordersRoutes for router /api/orders
  app.use('/api/orders', ordersRoutes);

  // User productsRoutes for router /api/products
  app.use('/api/products', productsRoutes);

  // User shopRoutes for router /api/shop
  app.use('/api/shop', shopRoutes);

  // User usersRoutes for router /api/users
  app.use('/api/users', usersRoutes);

  // User cartRoutes for router /api/cart
  app.use('/api/cart', cartRoutes);

  // User submitNewRoutes for router /api/submitnews
  app.use('/api/submitnews', submitNewRoutes);
  
  app.use('/images', express.static(path.resolve(__dirname, '../', 'build', 'images')));
  
  app.use(express.static('public'));

  app.use(express.static(path.resolve(__dirname, '../', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
  });

  // Start app on port 5000 or PORT in .env and print it to console log
  app.listen(port, () => console.log(`server is listening on port ${port}`));
};

// Start App function
startApp();

// export function startApp for testing
export { startApp };
