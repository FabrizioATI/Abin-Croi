const express = require('express');
const passport = require('passport');

const LoansService = require('../services/prestamos.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { createLoansSchema, updateLoansSchema, getLoansSchema } = require('../schemas/prestamos.schema');

const router = express.Router();
const service = new LoansService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const loans = await service.find();
      res.json(loans);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getLoansSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const loans = await service.findOne(id);
      res.json(loans);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(createLoansSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLoans = await service.create(body);
      res.status(201).json(newLoans);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getLoansSchema, 'params'),
  validatorHandler(updateLoansSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const loans = await service.update(id, body);
      res.json(loans);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getLoansSchema, 'params'),
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
