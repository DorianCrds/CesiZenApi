const Joi = require('joi');

const createStressFeedbackRangeSchema = Joi.object({
    minScore: Joi.number().integer().required(),
    maxScore: Joi.number().integer().required(),
    message: Joi.string().min(3).required(),
});

const updateStressFeedbackRangeSchema = Joi.object({
    minScore: Joi.number().integer().optional(),
    maxScore: Joi.number().integer().optional(),
    message: Joi.string().min(3).optional(),
});

module.exports = {
    createStressFeedbackRangeSchema,
    updateStressFeedbackRangeSchema,
};
