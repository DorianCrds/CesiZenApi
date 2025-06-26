const Joi = require('joi');

const createPageSchema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    slug: Joi.string().alphanum().min(3).max(255).required(),
});

const updatePageSchema = Joi.object({
    title: Joi.string().min(3).max(255).optional(),
    slug: Joi.string().alphanum().min(3).max(255).optional(),
});

module.exports = {
    createPageSchema,
    updatePageSchema,
};
