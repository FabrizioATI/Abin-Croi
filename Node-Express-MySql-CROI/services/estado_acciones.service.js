const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class StateActionService {
  constructor() {}

  async create(data) {
    const newStateAction = await models.StateActions.create(data);
    return newStateAction;
  }

  async find() {
    const rta = await models.StateActions.findAll({
      include: ['actionsbuy']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const stateactions = await models.StateActions.findByPk(id, { include:[
      'actionsbuy'
    ]});
    if (!stateactions) {
      throw boom.notFound('StateActions not found');
    }
    return stateactions;

  }

  async update(id, changes) {
    const stateactions = await this.findOne(id);
    const rta = await stateactions.update(changes);
    return rta;
  }

  async delete(id) {
    const stateactions = await this.findOne(id);
    const rta = await stateactions.destroy();
    return rta;
  }
}

module.exports = StateActionService;
