const User = require('../../models/User');

const listUsers = async (req, res) => {
    const users = await User.list();
    res.json(users);
}

module.exports = listUsers;