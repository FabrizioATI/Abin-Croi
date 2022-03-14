const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const rta = await models.Order.findAll({
      include: ['actionsbuy', 'investmentbuy', 'bondsbuy', 'loans', 'user']
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, { include:[
      'actionsbuy', 'investmentbuy', 'bondsbuy', 'loans', 'user'
    ]});
    if (!order) {
      throw boom.notFound('Order not found');
    }
    return order;

  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const rta = await order.update(changes);
    return rta;
  }

  async delete(id) {
    const order = await this.findOne(id);
    const rta = await order.destroy();
    return rta;
  }
}

module.exports = OrderService;
