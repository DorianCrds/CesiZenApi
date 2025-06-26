const Joi = require('joi');

const contentBlockSchema = Joi.object({
    type: Joi.string().valid('text', 'image', 'video').required(),
    content: Joi.string().required(),
    order: Joi.number().integer().required(),
    pageId: Joi.number().integer().required(),
});

module.exports = {
    contentBlockSchema,
};
