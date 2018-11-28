import '@babel/polyfill';

import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import session from 'express-session';
import path from 'path';

import { ConnectDatabase } from './Databases/Connect';
import cartRoutes from './routes/cartRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
import ordersRoutes from './routes/ordersRoutes';
import productsRoutes from './routes/productsRoutes';
import shopRoutes from './routes/shopRoutes';
import submitNewRoutes from './routes/submitNewRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();
app.use(compression());
app.use(
  session({
    secret: 'thien lam ne',
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

ConnectDatabase();

const port = process.env.PORT || 5000;
// cai nay sau khi viet ham isLoggedIn

app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/submitnews', submitNewRoutes);

app.use('/images', express.static(path.resolve(__dirname, '../', 'build', 'images')));
app.use(express.static('public'));

app.use(express.static(path.resolve(__dirname, '../', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
});

app.listen(port, () => console.log(`server is listening on port ${port}`));
