const express = require('express');
const usersRouter = require('./user.js')
const authRouter = require('./auth.router')
const CategoryRouter = require('./category')
const TypeRouter = require('./type')
const ProjectRouter = require('./project')


function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router)
  router.use('/user', usersRouter);
  router.use('/auth', authRouter);
  router.use('/category', CategoryRouter);
  router.use('/type', TypeRouter);
  router.use('/project', ProjectRouter);
}

module.exports = routerApi;

