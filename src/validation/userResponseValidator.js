const Joi = require('joi');

const createUserResponseSchema = Joi.object({
    userId: Joi.number().integer().required(),
    questionnaireId: Joi.number().integer().required(),
    selectedEvents: Joi.array().items(Joi.number().integer()).required(),
});

module.exports = {
    createUserResponseSchema,
};
