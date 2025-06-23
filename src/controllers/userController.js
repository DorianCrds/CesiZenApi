const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const UserController = {
    getAll: async (req, res) => {
        try {
            const users = await UserModel.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const user = await UserModel.getById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const { firstname, lastname, email, password, roleId } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await UserModel.create({
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

    update: async (req, res) => {
        try {
            const updatedUser = await UserModel.update(req.params.id, req.body);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await UserModel.delete(req.params.id);
            res.json({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = UserController;
