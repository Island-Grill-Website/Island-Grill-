const { default: knex } = require("knex");

class User {
    constructor({id, name, email, phone, password}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    static async findByEmail(email) {
        const user = await db('users').where({email}).first();
        return user ? new User(user) : null;
    }
    static async list() {
        const query = ` SELECT * FROM users`;
        const { rows } = await knex.raw(query);
        return rows.map(row => new User(row));
    }
    static async findById(id) {
        const query = `SELECT * FROM users WHERE id = ?`;
        const args = [id];
        const { rows } = await knex.raw(query, args);
        const users = rows[0];
        return users ? new User(users) : null;
    }
    static async create(name, email, phone, password) {
        const query = `INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)`;
        const args = [name, email, phone, password];
        const { rows } = await knex.raw(query, args);
        const user = rows[0];
        return user ? new User(user) : null;
    }
    static async deleteAll() {
        return knex.raw(`TRUNCATE users`);
    }
    static async deleteById(id) {
        const query = `DELETE FROM users WHERE id = ?`;
        const args = [id];
        const { rows } = await knex.raw(query, args);
        return rows.length > 0;
    }
    static async update(id, name, email, phone, password) {
        const query = `UPDATE users SET name = ?, email = ?, phone = ?, password = ? WHERE id = ?`;
        const args = [name, email, phone, password, id];
        const { rows } = await knex.raw(query, args);
    }
}

module.exports = User;