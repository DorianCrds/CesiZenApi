const RoleModel = require('../models/roleModel');

const RoleController = {
    getAll: async (req, res) => {
        try {
            const roles = await RoleModel.getAll();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const role = await RoleModel.getById(req.params.id);
            if (!role) return res.status(404).json({ message: 'Role not found' });
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const { label } = req.body;
            const newRole = await RoleModel.create(label);
            res.status(201).json(newRole);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await RoleModel.delete(req.params.id);
            res.json({ message: 'Role deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = RoleController;
