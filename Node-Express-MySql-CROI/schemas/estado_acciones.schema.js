const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const type = Joi.string().max(150);
const time = Joi.number().integer();
const advanceAmount = Joi.number();

const createStateActionSchema = Joi.object({
  type: type.required(),
  time: time.required(),
  advanceAmount: advanceAmount.required()
});

const updateStateActionSchema = Joi.object({
  type: type,
  time: time,
  advanceAmount: advanceAmount
});

const getStateActionSchema = Joi.object({
  id: id
});

module.exports = { createStateActionSchema, updateStateActionSchema, getStateActionSchema }
