const express = require('express');
const passport = require('passport');

const ActionsBuyService = require('../services/acciones_compra.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { createActionsBuySchema, updateActionsBuySchema, getActionsBuySchema } = require('../schemas/acciones_compra.schema');

const router = express.Router();
const service = new ActionsBuyService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const actionsbuy = await service.find();
      res.json(actionsbuy);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getActionsBuySchema, 'params'),
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
  validatorHandler(createActionsBuySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newActionBuy = await service.create(body);
      res.status(201).json(newActionBuy);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getActionsBuySchema, 'params'),
  validatorHandler(updateActionsBuySchema, 'body'),
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
  validatorHandler(getActionsBuySchema, 'params'),
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
