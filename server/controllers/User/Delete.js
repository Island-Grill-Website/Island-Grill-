const User = require('../../models/User');

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const success = await User.deleteById(id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

module.exports = deleteUser;