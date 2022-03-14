const express = require('express');
const passport = require('passport');

const BondsService = require('../services/bonos.service');
const validatorHandler = require('../middleware/validator.handler');
const { checkRoles } = require('../middleware/auth.handler');
const { createBondSchema, updateBondSchema, getBondSchema } = require('../schemas/bonos.schema');

const router = express.Router();
const service = new BondsService();

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const bond = await service.find();
      res.json(bond);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getBondSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const bond = await service.findOne(id);
      res.json(bond);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(createBondSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBond = await service.create(body);
      res.status(201).json(newBond);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getBondSchema, 'params'),
  validatorHandler(updateBondSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const bond = await service.update(id, body);
      res.json(bond);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('Juridic', 'Natural', 'admin'),
  validatorHandler(getBondSchema, 'params'),
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
