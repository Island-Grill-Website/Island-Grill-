exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('email', 255).notNullable().unique();
    table.string('phone', 20);
    table.string('password_hash', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
}; 