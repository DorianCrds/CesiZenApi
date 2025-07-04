const MenuItemModel = require('../models/menuItemModel');

const MenuItemController = {
    getAllMenuItems: async (req, res) => {
        try {
            const items = await MenuItemModel.getAllMenuItems();
            res.json(items);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving menu items.' });
        }
    },

    getMenuItemById: async (req, res) => {
        try {
            const item = await MenuItemModel.getMenuItemById(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Menu item not found.' });
            }
            res.json(item);
        } catch (err) {
            res.status(500).json({ error: 'Error retrieving menu item.' });
        }
    },

    createMenuItem: async (req, res) => {
        try {
            const data = {
                ...req.body,
                isPublic: req.body.isPublic ?? true,
                requiredRole: req.body.requiredRole ?? null,
            };

            const newItem = await MenuItemModel.createMenuItem(data);
            res.status(201).json(newItem);
        } catch (err) {
            console.error('Erreur createMenuItem:', err);
            res.status(500).json({ error: 'Error creating menu item.' });
        }
    },

    updateMenuItem: async (req, res) => {
        try {
            const updatedItem = await MenuItemModel.updateMenuItem(req.params.id, req.body);
            res.json(updatedItem);
        } catch (err) {
            res.status(500).json({ error: 'Error updating menu item.' });
        }
    },

    deleteMenuItem: async (req, res) => {
        try {
            await MenuItemModel.deleteMenuItem(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: 'Error deleting menu item.' });
        }
    },
};


module.exports = MenuItemController;
