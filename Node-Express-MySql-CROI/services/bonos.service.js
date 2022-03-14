const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class BondsService {
  constructor() {}

  async create(data) {
    const newBond = await models.Bond.create(data);
    return newBond;
  }

  async find() {
    const rta = await models.Bond.findAll({
      include: ['project'/*, 'bondsbuy'*/]
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const bond = await models.Bond.findByPk(id, { include:[
      'project'/*, 'bondsbuy'*/
    ]});
    if (!bond) {
      throw boom.notFound('Bond not found');
    }
    return bond;
  }

  async update(id, changes) {
    const bond = await this.findOne(id);
    const rta = await bond.update(changes);
    return rta;
  }

  async delete(id) {
    const bond = await this.findOne(id);
    const rta = await bond.destroy();
    return rta;
  }
}

module.exports = BondsService;

