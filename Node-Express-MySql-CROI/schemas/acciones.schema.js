const Joi = require('joi');

const id = Joi.number().integer();
const projectId = Joi.number().integer();
const nActionsSales = Joi.number().integer();
const purchasePrice = Joi.number();
const sellingPrice = Joi.number();
const nActionsRest = Joi.number().integer();


const createActionsSchema = Joi.object({
  projectId: projectId.required(),
  nActionsSales: nActionsSales.required(),
  purchasePrice: purchasePrice.required(),
  sellingPrice: sellingPrice.required(),
  nActionsRest: nActionsRest.required()
});

const updateActionsSchema = Joi.object({
  projectId: projectId,
  nActionsSales: nActionsSales,
  purchasePrice: purchasePrice,
  sellingPrice: sellingPrice,
  nActionsRest: nActionsRest
});

const getActionsSchema = Joi.object({
  id: id
});

module.exports = { createActionsSchema, updateActionsSchema, getActionsSchema }
