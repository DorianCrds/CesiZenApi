const Joi = require('joi');

const menuItemSchema = Joi.object({
    label: Joi.string().min(1).max(255).required(),
    slug: Joi.string().min(1).max(255).required(),
    order: Joi.number().integer().required(),
    pageId: Joi.number().integer().allow(null),

    isPublic: Joi.boolean().default(true),       // ajouté et optionnel
    requiredRole: Joi.number().integer().allow(null).default(null),  // ajouté et optionnel
});


module.exports = {
    menuItemSchema,
};
