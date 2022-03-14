const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class BondsBuyService {
  constructor() {}

  async create(data) {
    const newBondsBuy = await models.BondsBuy.create(data);
    return newBondsBuy;
  }

  async find() {
    const rta = await models.BondsBuy.findAll({
      include: ['bond', 'order']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const bondsbuy = await models.BondsBuy.findByPk(id, { include:[
      'bond', 'order'
    ]});
    if (!bondsbuy) {
      throw boom.notFound('BondsBuy not found');
    }
    return bondsbuy;

  }

  async update(id, changes) {
    const bondsbuy = await this.findOne(id);
    const rta = await bondsbuy.update(changes);
    return rta;
  }

  async delete(id) {
    const bondsbuy = await this.findOne(id);
    const rta = await bondsbuy.destroy();
    return rta;
  }
}

module.exports = BondsBuyService;
