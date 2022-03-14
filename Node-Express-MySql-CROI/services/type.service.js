//const boom = require('@hapi/boom');

const { models }= require('../libs/sequelize');

class TypeFinancingService {

  constructor(){
  }
  async create(data) {
    const newType = await models.TypeFinancing.create(data);
    return newType;
  }

  async find() {
    const type = await models.TypeFinancing.findAll();
    return type;
  }

  async findOne(id) {
    const type = await models.TypeFinancing.findByPk(id, {
      include: ['project']
    });
    return type;
  }

  async update(id, changes) {
    const type = await this.findOne(id);
    const rta = await type.update(changes);
    return rta;
  }

  async delete(id) {
    const type = await this.findOne(id);
    await type.destroy();
    return { id };
  }

}

module.exports = TypeFinancingService;
