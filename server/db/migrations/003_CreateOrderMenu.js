exports.up = function(knex) {
  return knex.schema.createTable('order_menu', function(table) {
    table.increments('id').primary();
    table.integer('order_id').unsigned().references('id').inTable('orders').onDelete('CASCADE');
    table.integer('menu_item_id').unsigned().references('id').inTable('menu');
    table.integer('quantity').notNullable();
    table.decimal('price_at_order_time', 10, 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('order_menu');
}; 