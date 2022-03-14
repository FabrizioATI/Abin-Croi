const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class ActionsBuyService {
  constructor() {}

  async create(data) {
    const newActionBuy = await models.ActionsBuy.create(data);
    return newActionBuy;
  }

  async find() {
    const rta = await models.ActionsBuy.findAll({
      include: ['actions', 'stateactions', 'order']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const actionbuy = await models.ActionsBuy.findByPk(id, { include:[
      'actions', 'stateactions', 'order'
    ]});
    if (!actionbuy) {
      throw boom.notFound('ActionBuy not found');
    }
    return actionbuy;

  }

  async update(id, changes) {
    const actionbuy = await this.findOne(id);
    const rta = await actionbuy.update(changes);
    return rta;
  }

  async delete(id) {
    const actionbuy = await this.findOne(id);
    const rta = await actionbuy.destroy();
    return rta;
  }
}

module.exports = ActionsBuyService;

