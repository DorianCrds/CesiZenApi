const MenuItemModel = require('../models/MenuItemModel');

const PublicMenuItemController = {
    getMenu: async (req, res) => {
        try {
            const menuItems = await MenuItemModel.getPublicMenuItems();
            res.json(menuItems);
        } catch (error) {
            console.error('Erreur lors de la récupération du menu public :', error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    },
};

module.exports = PublicMenuItemController;
