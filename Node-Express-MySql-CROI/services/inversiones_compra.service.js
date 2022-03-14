const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class InvestmentBuyService {
  constructor() {}

  async create(data) {
    const newInvestmentBuy = await models.InvestmentBuy.create(data);
    return newInvestmentBuy;
  }

  async find() {
    const rta = await models.InvestmentBuy.findAll({
      include: ['investment', 'order']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const investmentbuy = await models.InvestmentBuy.findByPk(id, { include:[
      'investment', 'order'
    ]});
    if (!investmentbuy) {
      throw boom.notFound('InvestmentBuy not found');
    }
    return investmentbuy;

  }

  async update(id, changes) {
    const investmentbuy = await this.findOne(id);
    const rta = await investmentbuy.update(changes);
    return rta;
  }

  async delete(id) {
    const investmentbuy = await this.findOne(id);
    const rta = await investmentbuy.destroy();
    return rta;
  }
}

module.exports = InvestmentBuyService;
