const express = require('express');
const passport = require('passport');

const InvestmentService = require('../services/inversiones.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { createInvestmentSchema, updateInvestmentSchema, getInvestmentSchema } = require('../schemas/inversiones.schema');

const router = express.Router();
const service = new InvestmentService();

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
  validatorHandler(getInvestmentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const investment = await service.findOne(id);
      res.json(investment);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(createInvestmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newInvestment = await service.create(body);
      res.status(201).json(newInvestment);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getInvestmentSchema, 'params'),
  validatorHandler(updateInvestmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const investment = await service.update(id, body);
      res.json(investment);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getInvestmentSchema, 'params'),
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
