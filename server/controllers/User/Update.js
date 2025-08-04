const User = require('../../models/User');

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, password } = req.body;
    const success = await User.update(id, name, email, phone, password);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

module.exports = updateUser;