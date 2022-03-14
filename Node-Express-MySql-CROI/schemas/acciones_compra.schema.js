const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const actionsId = Joi.number().integer();
const stateId = Joi.number().integer();
const nActionsBuy = Joi.number().integer();
const state = Joi.string();
const dateBuy = Joi.date();
const totalPay = Joi.number();
const voucherFile = Joi.string().uri();

const createActionsBuySchema = Joi.object({
  actionsId: actionsId.required(),
  stateId: stateId.required(),
  nActionsBuy: nActionsBuy.required(),
  state: state.required(),
  dateBuy: dateBuy.required(),
  totalPay: totalPay.required(),
  voucherFile: voucherFile.required()
});

const updateActionsBuySchema = Joi.object({
  actionsId: actionsId,
  stateId: stateId,
  nActionsBuy: nActionsBuy,
  state: state,
  dateBuy: dateBuy,
  totalPay: totalPay,
  voucherFile: voucherFile
});

const getActionsBuySchema = Joi.object({
  id: id
});

module.exports = { createActionsBuySchema, updateActionsBuySchema, getActionsBuySchema }
