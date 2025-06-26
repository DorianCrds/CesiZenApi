const Joi = require('joi');

const createEventSchema = Joi.object({
    label: Joi.string().min(3).max(255).required(),
    score: Joi.number().integer().min(0).required(),
    questionnaireId: Joi.number().integer().required(),
});

const updateEventSchema = Joi.object({
    label: Joi.string().min(3).max(255).optional(),
    score: Joi.number().integer().min(0).optional(),
    questionnaireId: Joi.number().integer().optional(),
});

module.exports = {
    createEventSchema,
    updateEventSchema,
};
