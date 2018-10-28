import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

import { ConnectDatabase } from './Databases/Connect';
import categoriesRoutes from './routes/categoriesRoutes';
import ordersRoutes from './routes/ordersRoutes';
import productsRoutes from './routes/productsRoutes';
import shopRoutes from './routes/shopRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();
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

app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/users', usersRoutes);

app.listen(port, () => console.log(`server is listening on port ${port}`));
