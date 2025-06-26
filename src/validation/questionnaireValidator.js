const Joi = require('joi');

const createQuestionnaireSchema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(3).max(1000).required(),
});

const updateQuestionnaireSchema = Joi.object({
    title: Joi.string().min(3).max(255).optional(),
    description: Joi.string().min(3).max(1000).optional(),
});

module.exports = {
    createQuestionnaireSchema,
    updateQuestionnaireSchema,
};
