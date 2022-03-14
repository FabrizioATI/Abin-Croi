const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class InvestmentService {
  constructor() {}

  async create(data) {
    const newInvestment = await models.Investment.create(data);
    return newInvestment;
  }

  async find() {
    const rta = await models.Investment.findAll({
      include: ['project'/*, 'investmentbuy'*/]
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const investment = await models.Investment.findByPk(id, { include:[
      'project'/*, 'investmentbuy'*/
    ]});
    if (!investment) {
      throw boom.notFound('Investment not found');
    }
    return investment;

  }

  async update(id, changes) {
    const investment = await this.findOne(id);
    const rta = await investment.update(changes);
    return rta;
  }

  async delete(id) {
    const investment = await this.findOne(id);
    const rta = await investment.destroy();
    return rta;
  }
}

module.exports = InvestmentService;
