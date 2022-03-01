const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const lastName = Joi.string().max(50);
const firstName = Joi.string().max(50) ;
const phoneNumber = Joi.number().min(9);
const email = Joi.string().email();
const password = Joi.string().min(8);
const ruc = Joi.string().max(50);
const mannager = Joi.string().max(50);
const cui = Joi.string().max(50) ;
const specialUser = Joi.boolean();
const bankStatus = Joi.string().max(50);
const bankAccount = Joi.string().max(50);
const errors = Joi.number().integer();
const role = Joi.string().min(3);

const createUserSchema = Joi.object({
  lastName: lastName.required(),
  firstName: firstName.required(),
  phoneNumber: phoneNumber.required(),
  email: email.required(),
  password: password.required(),
  ruc: ruc.required(),
  mannager: mannager,
  cui: cui.required(),
  specialUser: specialUser.required(),
  bankStatus: bankStatus.required(),
  bankAccount: bankAccount.required(),
  role: role.required(),
});

const updateUserSchema = Joi.object({
  lastName: lastName,
  firstName: firstName,
  phoneNumber: phoneNumber,
  email: email,
  role: role,
  errors: errors
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
