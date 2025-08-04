const User = require('../../models/User');

const createUser = async (req, res) => {
    const { name, email, phone, password } = req.body;
    const user = await User.create(name, email, phone, password);
    res.status(201).json(user);
}

module.exports = createUser;