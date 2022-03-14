const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const bondsId = Joi.number().integer();
const nBondsBuy = Joi.number().integer();
const startDate = Joi.date();
const bondDate = Joi.date();
const vTotalPay = Joi.number();

const createBondsBuySchema = Joi.object({
  bondsId: bondsId.required(),
  nBondsBuy: nBondsBuy.required(),
  startDate: startDate.required(),
  bondDate: bondDate.required(),
  vTotalPay: vTotalPay.required()
});

const updateBondsBuySchema = Joi.object({
  bondsId: bondsId,
  nBondsBuy: nBondsBuy,
  startDate: startDate,
  bondDate: bondDate,
  vTotalPay: vTotalPay
});

const getBondsBuySchema = Joi.object({
  id: id
});

module.exports = { createBondsBuySchema, updateBondsBuySchema, getBondsBuySchema }
