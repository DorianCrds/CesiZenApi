const Joi = require('joi');

const menuItemSchema = Joi.object({
    label: Joi.string().min(1).max(255).required(),
    slug: Joi.string().min(1).max(255).required(),
    order: Joi.number().integer().required(),
    pageId: Joi.number().integer().allow(null),
});

module.exports = {
    menuItemSchema,
};
