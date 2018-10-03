import express from "express";
import bodyParser from "body-parser";

import { ConnectDatabase } from './Databases/Connect'

import categoriesRoutes from './routes/categoriesRoutes'
import ordersRoutes from './routes/ordersRoutes'
import productsRoutes from './routes/productsRoutes'
import shopRoutes from './routes/shopRoutes'
import usersRoutes from './routes/usersRoutes'

const app = express();

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

ConnectDatabase();

const port = process.env.PORT || 5000;

// app.get("/api/flower", (req, res) => {
//     const flowers = [
//         { id: 1, ten: "hoa giang" },
//         { id: 2, ten: "hoa giang1" },
//         { id: 3, ten: "hoa giang2" }
//     ];
//     res.json(flowers);
// });

app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/users', usersRoutes);

app.listen(port, () => console.log(`server is listening on port ${port}`));