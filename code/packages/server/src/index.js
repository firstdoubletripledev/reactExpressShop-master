import express from 'express';
var cookieParser = require('cookie-parser');
import bodyParser from 'body-parser';

import session from 'express-session';

var MongoStore = require('connect-mongo')(session);
import { ConnectDatabase,db } from './Databases/Connect';
import categoriesRoutes from './routes/categoriesRoutes';
import ordersRoutes from './routes/ordersRoutes';
import productsRoutes from './routes/productsRoutes';
import shopRoutes from './routes/shopRoutes';
import usersRoutes from './routes/usersRoutes';
import cartRoutes from './routes/cartRoutes';
import submitNewRoutes from './routes/submitNewRoutes';

const app = express();
app.use(cookieParser());
// app.use(
//   session({
//     secret: 'thien lam ne',
//     resave: false,
//     saveUninitialized: true,
//   }),
// );
ConnectDatabase();
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection:db}), // in part add a store session 
  cookie:{maxAge:180*60*1000}
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
// cai nay sau khi viet ham isLoggedIn

app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/submitnews', submitNewRoutes);

app.listen(port, () => console.log(`server is listening on port ${port}`));
