const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const { customer_name, customer_email, items, total } = req.body;
    if (!customer_name || !customer_email || !Array.isArray(items) || typeof total !== 'number') {
      return res.status(400).json({ error: 'Invalid order data' });
    }
    await Order.createOrder({ customer_name, customer_email, items, total });
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to place order' });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.getAllOrders();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

module.exports = {
  createOrder,
  getOrders,
}; 