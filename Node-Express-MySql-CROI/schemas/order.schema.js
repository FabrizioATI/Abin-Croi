const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const actionsBuyId = Joi.number().integer();
const investmentsBuyId = Joi.number().integer();
const bondsBuyId = Joi.number().integer();
const loansId = Joi.number().integer();

const createOrderSchema = Joi.object({
  userId: userId.required(),
  actionsBuyId: actionsBuyId.required(),
  investmentsBuyId: investmentsBuyId.required(),
  bondsBuyId: bondsBuyId.required(),
  loansId: loansId.required()
});

const updateOrderSchema = Joi.object({
  userId: userId,
  actionsBuyId: actionsBuyId,
  investmentsBuyId: investmentsBuyId,
  bondsBuyId: bondsBuyId,
  loansId: loansId
});

const getOrderSchema = Joi.object({
  id: id
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }
