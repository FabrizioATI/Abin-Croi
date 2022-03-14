const express = require('express');
const passport = require('passport');

const InvestmentBuyService = require('../services/inversiones_compra.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { createInvestmentBuySchema, updateInvestmentBuySchema, getInvestmentBuySchema } = require('../schemas/inversiones_compra.schema');

const router = express.Router();
const service = new InvestmentBuyService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const investment = await service.find();
      res.json(investment);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getInvestmentBuySchema, 'params'),
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
  validatorHandler(createInvestmentBuySchema, 'body'),
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
  validatorHandler(getInvestmentBuySchema, 'params'),
  validatorHandler(updateInvestmentBuySchema, 'body'),
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
  validatorHandler(getInvestmentBuySchema, 'params'),
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
