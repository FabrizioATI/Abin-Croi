const Joi = require('joi');

const id = Joi.number().integer();
const projectId = Joi.number().integer();
const amountPrice = Joi.number();
const interest = Joi.number();
const lastDayPayment = Joi.date();
const datePaymentMonthly = Joi.date();
const typeLoan = Joi.string().max(2000);
const penalty = Joi.number();
const totalPayment = Joi.number();

const createLoansSchema = Joi.object({
  projectId: projectId.required(),
  amountPrice: amountPrice.required(),
  interest: interest.required(),
  lastDayPayment: lastDayPayment.required(),
  datePaymentMonthly: datePaymentMonthly.required(),
  typeLoan: typeLoan.required(),
  penalty: penalty.required(),
  totalPayment: totalPayment.required()
});

const updateLoansSchema = Joi.object({
  projectId: projectId,
  amountPrice: amountPrice,
  interest: interest,
  lastDayPayment: lastDayPayment,
  datePaymentMonthly: datePaymentMonthly,
  typeLoan: typeLoan,
  penalty: penalty,
  totalPayment: totalPayment
});

const getLoansSchema = Joi.object({
  id: id
});

module.exports = { createLoansSchema, updateLoansSchema, getLoansSchema }
