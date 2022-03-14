const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class ActionsService {
  constructor() {}

  async create(data) {
    const newAction = await models.Actions.create(data);
    return newAction;
  }

  async find() {
    const rta = await models.Actions.findAll({
      include: ['project', 'actionsbuy']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const action = await models.Actions.findByPk(id, { include:[
      'project', 'actionsbuy'
    ]});
    if (!action) {
      throw boom.notFound('Action not found');
    }
    return action;

  }

  async update(id, changes) {
    const action = await this.findOne(id);
    const rta = await action.update(changes);
    return rta;
  }

  async delete(id) {
    const action = await this.findOne(id);
    const rta = await action.destroy();
    return rta;
  }
}

module.exports = ActionsService;

