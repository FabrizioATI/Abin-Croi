const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres');

const { models } = require('../libs/sequelize')


class ProjectService {
  constructor() {}

  async create(data) {
    const newProject = await models.Project.create(data);
    return newProject;
  }

  async find() {
    const rta = await models.Project.findAll({
      include: ['category', 'type', 'user', 'action',]
    });
    //const rta = await client.query('SELECT * FROM task');
    return rta;
  }

  async findOne(id) {
    const project = await models.Project.findByPk(id, { include:[
      'category', 'type', 'user'
    ]});
    if (!project) {
      throw boom.notFound('Project not found');
    }
    return project;

  }

  async update(id, changes) {
    const project = await this.findOne(id);
    const rta = await project.update(changes);
    return rta;
  }

  async delete(id) {
    const project = await this.findOne(id);
    const rta = await project.destroy();
    return rta;
  }
}

module.exports = ProjectService;
