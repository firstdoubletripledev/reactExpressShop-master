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

// import path module
import path from 'path';

// import swaggerUi module from swagger-ui-express
import swaggerUi from 'swagger-ui-express';

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

// import swaggerDocument for swagger document
import swaggerDocument from './swagger.json';

// import usersRoutes for api
import usersRoutes from './routes/usersRoutes';

// import cartRoutes for api
import cartRoutes from './routes/cartRoutes';

// Config dotenv for get data from .env file
require('dotenv').config();

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

  // Use categoriesRoutes for router /api/categories
  app.use('/api/categories', categoriesRoutes);

  // Use ordersRoutes for router /api/orders
  app.use('/api/orders', ordersRoutes);

  // Use productsRoutes for router /api/products
  app.use('/api/products', productsRoutes);

  // Use shopRoutes for router /api/shop
  app.use('/api/shop', shopRoutes);

  // Use usersRoutes for router /api/users
  app.use('/api/users', usersRoutes);

  // Use cartRoutes for router /api/cart
  app.use('/api/cart', cartRoutes);

  // Use submitNewRoutes for router /api/submitnews
  app.use('/api/submitnews', submitNewRoutes);

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Use /images router for static image in folder packages/server/src
  app.use('/images', express.static(path.resolve(__dirname, '../', 'build', 'images')));

  // Use static folder build for react web app
  app.use(express.static(path.resolve(__dirname, '../', 'build')));

  // Use /* for catch all router to react app
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
