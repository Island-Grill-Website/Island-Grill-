const db = require('../db/knex');

const createOrder = async ({ customer_name, customer_email, items, total }) => {
  return db('orders').insert({
    customer_name,
    customer_email,
    items: JSON.stringify(items),
    total
  });
};

const getAllOrders = async () => {
  return db('orders').select('*').orderBy('created_at', 'desc');
};

module.exports = {
  createOrder,
  getAllOrders,
}; 