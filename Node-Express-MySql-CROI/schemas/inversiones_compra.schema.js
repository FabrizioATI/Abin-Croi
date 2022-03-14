const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const investmentId = Joi.number().integer();
const investmentAmount = Joi.number();
const profitAmount = Joi.number();
const startDate = Joi.date();
const paymentDate = Joi.date();
const profitRate = Joi.number();
const hourRate = Joi.number();
const dayRate = Joi.number();
const monthRate = Joi.number();

const createInvestmentBuySchema = Joi.object({
  investmentId: investmentId.required(),
  investmentAmount: investmentAmount.required(),
  profitAmount: profitAmount.required(),
  startDate: startDate.required(),
  paymentDate: paymentDate.required(),
  profitRate: profitRate.required(),
  hourRate: hourRate.required(),
  dayRate: dayRate.required(),
  monthRate: monthRate.required()
});

const updateInvestmentBuySchema = Joi.object({
  investmentId: investmentId,
  investmentAmount: investmentAmount,
  profitAmount: profitAmount,
  startDate: startDate,
  paymentDate: paymentDate,
  profitRate: profitRate,
  hourRate: hourRate,
  dayRate: dayRate,
  monthRate: monthRate
});

const getInvestmentBuySchema = Joi.object({
  id: id
});

module.exports = { createInvestmentBuySchema, updateInvestmentBuySchema, getInvestmentBuySchema }
