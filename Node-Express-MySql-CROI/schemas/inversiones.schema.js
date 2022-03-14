const Joi = require('joi');

const id = Joi.number().integer();
const projectId = Joi.number().integer();
const totalAmount = Joi.number();
const remainingAmount = Joi.number();
const date = Joi.date();


const createInvestmentSchema = Joi.object({
  projectId: projectId.required(),
  totalAmount: totalAmount.required(),
  remainingAmount: remainingAmount.required(),
  date: date.required()
});

const updateInvestmentSchema = Joi.object({
  projectId: projectId,
  totalAmount: totalAmount,
  remainingAmount: remainingAmount,
  date: date
});

const getInvestmentSchema = Joi.object({
  id: id
});

module.exports = { createInvestmentSchema, updateInvestmentSchema, getInvestmentSchema }
