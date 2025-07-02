const jwt = require('jsonwebtoken');
const prisma = require('../config/prisma');

const authenticate = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ error: 'Authorization header format: Bearer <token>' });

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Récupérer l'utilisateur complet dans la BDD avec son rôle
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },  // suppose que token contient un id utilisateur
            include: { role: true },
        });

        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé' });
        }

        req.user = user; // attacher l'utilisateur complet à la requête
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
};

module.exports = authenticate;
