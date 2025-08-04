require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const menuRouter = require('./routes/menu');
const ordersRouter = require('./routes/orderRoutes');
const orderMenuRouter = require('./routes/order_menu');

const app = express();
// TODO add the static files for the frontend from the dist folder 
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/menu', menuRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/order_menu', orderMenuRouter);

app.get('/', (req, res) => {
  res.send('Island Grill API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});