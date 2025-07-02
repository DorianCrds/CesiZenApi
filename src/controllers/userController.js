const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const requesterRole = req.user?.role?.label;

            let users;
            if (requesterRole === 'super-admin') {
                // Super-admin voit tout le monde
                users = await UserModel.getAllUsers();
            } else if (requesterRole === 'admin') {
                // Admins ne voient que les utilisateurs "simples"
                users = await UserModel.getUsersByRoleLabel('user');
            } else {
                return res.status(403).json({ error: 'Accès interdit' });
            }

            console.log('[DEBUG] Utilisateurs renvoyés :', users);
            res.json(users);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    getUserById: async (req, res) => {
        try {
            const user = await UserModel.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const { firstname, lastname, email, password, roleId } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await UserModel.createUser({
                firstname,
                lastname,
                email,
                password: hashedPassword,
                roleId,
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await UserModel.updateUser(req.params.id, req.body);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            await UserModel.deleteUser(req.params.id);
            res.json({ message: 'User archived' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    toggleUserStatus: async (req, res) => {
        try {
            const { isActive } = req.body;
            const updatedUser = await UserModel.updateUser(req.params.id, { isActive });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

};

module.exports = UserController;
