const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createTypeSchema = Joi.object({
  name: name.required(),
  image: image.required()
});

const updateTypeSchema = Joi.object({
  name: name,
  image: image
});

const getTypeSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTypeSchema, updateTypeSchema, getTypeSchema }
