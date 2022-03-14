const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class LoansService {
  constructor() {}

  async create(data) {
    const newLoans = await models.Loans.create(data);
    return newLoans;
  }

  async find() {
    const rta = await models.Loans.findAll({
      include: ['project', 'order']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const loans = await models.Loans.findByPk(id, { include:[
      'project', 'order'
    ]});
    if (!loans) {
      throw boom.notFound('Loans not found');
    }
    return loans;

  }

  async update(id, changes) {
    const loans = await this.findOne(id);
    const rta = await loans.update(changes);
    return rta;
  }

  async delete(id) {
    const loans = await this.findOne(id);
    const rta = await loans.destroy();
    return rta;
  }
}

module.exports = LoansService;

