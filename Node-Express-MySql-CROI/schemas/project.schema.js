const Joi = require('joi');
//const { max } = require('pg/lib/defaults');

const id = Joi.number().integer();
const nameProject = Joi.string().max(50);
const descriptionProject = Joi.string().max(2000);
const direction = Joi.string().max(80);
const fileURL = Joi.string().uri();
const nameEnterprise = Joi.string().max(50);
const state = Joi.boolean();
const imgURL = Joi.string().uri();
const videURL = Joi.string().uri();
const modifiedAt = Joi.date();
const categoryId = Joi.number().integer();
const userId = Joi.number().integer();
const typeId = Joi.number().integer();

const createProjectSchema = Joi.object({
  nameProject: nameProject.required(),
  descriptionProject: descriptionProject.required(),
  direction: direction.required(),
  fileURL: fileURL.required(),
  nameEnterprise: nameEnterprise.required(),
  imgURL: imgURL.required(),
  videURL: videURL.required(),
  categoryId: categoryId.required(),
  userId: userId.required(),
  typeId: typeId.required(),
});

const updateProjectSchema = Joi.object({
  nameProject: nameProject,
  descriptionProject: descriptionProject,
  direction: direction,
  fileURL: fileURL,
  nameEnterprise: nameEnterprise,
  state: state,
  imgURL: imgURL,
  videURL: videURL,
  modifiedAt: modifiedAt,
  categoryId: categoryId,
  userId: userId,
  typeId: typeId
});

const getProjectSchema = Joi.object({
  id: id
});

module.exports = { createProjectSchema, updateProjectSchema, getProjectSchema }
