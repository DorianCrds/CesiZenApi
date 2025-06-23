const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const prisma = require('../config/prisma');

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email, roleId: user.roleId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(401).json({ error: 'User not found' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ error: 'Wrong password' });

        const token = generateToken(user);

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Servor error' });
    }
};

module.exports = { login };
