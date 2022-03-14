const express = require('express');
const passport = require('passport');

const ActionsService = require('../services/acciones.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { updateActionsSchema, createActionsSchema, getActionsSchema } = require('../schemas/acciones.schema');

const router = express.Router();
const service = new ActionsService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const actions = await service.find();
      res.json(actions);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getActionsSchema, 'params'),
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
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(createActionsSchema, 'body'),
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
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getActionsSchema, 'params'),
  validatorHandler(updateActionsSchema, 'body'),
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
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getActionsSchema, 'params'),
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
