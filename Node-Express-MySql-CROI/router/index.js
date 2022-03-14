const express = require('express');
const usersRouter = require('./user.js')
const authRouter = require('./auth.router')
const CategoryRouter = require('./category')
const TypeRouter = require('./type')
const ProjectRouter = require('./project')

const ActionsRouter = require('./acciones')
const BondsRouter = require('./bonos')
const InvestmentRouter = require('./inversiones')
const LoansRouter = require('./prestamos')

const ActionBuyRouter = require('./acciones_compra')
const BondBuyRouter = require('./bonos_compra')
const StateActionRouter = require('./estado_acciones')
const InvestmentBuyRouter = require('./inversiones_compra')
const OrderRouter = require('./order')



function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router)
  router.use('/user', usersRouter);
  router.use('/auth', authRouter);
  router.use('/category', CategoryRouter);
  router.use('/type', TypeRouter);
  router.use('/project', ProjectRouter);

  router.use('/action', ActionsRouter);
  router.use('/bond', BondsRouter);
  router.use('/investment', InvestmentRouter);
  router.use('/loans', LoansRouter);

  router.use('/actionbuy', ActionBuyRouter);
  router.use('/bondbuy', BondBuyRouter);
  router.use('/stateaction', StateActionRouter);
  router.use('/investmentbuy', InvestmentBuyRouter);
  router.use('/order', OrderRouter);
}

module.exports = routerApi;

