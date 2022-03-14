const Joi = require('joi');

const id = Joi.number().integer();
const projectId = Joi.number().integer();
const amountBonds = Joi.number().integer();
const rateYield = Joi.number();
const numberBond = Joi.number().integer();
const priceSale = Joi.number();

const createBondSchema = Joi.object({
  projectId: projectId.required(),
  amountBonds: amountBonds.required(),
  rateYield: rateYield.required(),
  numberBond: numberBond.required(),
  priceSale: priceSale.required()
});

const updateBondSchema = Joi.object({
  projectId: projectId,
  amountBonds: amountBonds,
  rateYield: rateYield,
  numberBond: numberBond,
  priceSale: priceSale
});

const getBondSchema = Joi.object({
  id: id
});

module.exports = { createBondSchema, updateBondSchema, getBondSchema }
