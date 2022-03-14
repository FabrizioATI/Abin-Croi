const express = require('express');
const passport = require('passport');

const StateActionService = require('../services/estado_acciones.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { createStateActionSchema, updateStateActionSchema, getStateActionSchema } = require('../schemas/estado_acciones.schema');

const router = express.Router();
const service = new StateActionService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const estadoAcciones = await service.find();
      res.json(estadoAcciones);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getStateActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const action = await service.findOne(id);
      res.json(action);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(createStateActionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAction = await service.create(body);
      res.status(201).json(newAction);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(getStateActionSchema, 'params'),
  validatorHandler(updateStateActionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const action = await service.update(id, body);
      res.json(action);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(getStateActionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
