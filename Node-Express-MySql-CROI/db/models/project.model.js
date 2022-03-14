const { Model, DataTypes, Sequelize } = require('sequelize');

const PROJECT_TABLE = 'project';
const { CATEGORY_TABLE } = require('./category.model');
const { TYPE_FINANCING_TABLE } = require('./type_financing.model');
const { USER_TABLE } = require('./user.model')

const ProjectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
  },
  typeId: {
    field: 'type_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TYPE_FINANCING_TABLE,
      key: 'id'
    },
  },
  nameProject: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'name_project',
    unique: true,
  },
  descriptionProject: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'description_project',
  },
  direction:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  fileURL:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'field_url',
  },
  nameEnterprise: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'name_enterprise',
  },
  state:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  /*imgURL:{
    allowNull: false,
    type: DataTypes.ARRAY(),
    field: 'image_url',
  },*/
  imgURL:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'image_url',
  },
  videURL:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'video_url',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  modifiedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'modified_at',
    defaultValue: Sequelize.NOW
  }
}

class Project extends Model {
  static associate(models) {
    Project.belongsTo(models.User, { as: 'user' , foreignKey: 'userId'});
    Project.belongsTo(models.Category, { as: 'category' , foreignKey: 'categoryId'});
    Project.belongsTo(models.TypeFinancing, { as: 'type' , foreignKey: 'typeId'});
    //
    Project.hasMany(models.Actions, { as: 'action' , foreignKey: 'projectId'});
    Project.hasMany(models.Investment, { as: 'investment' , foreignKey: 'projectId'});
    Project.hasMany(models.Bond, { as: 'bond' , foreignKey: 'projectId'});
    Project.hasMany(models.Loans, { as: 'loans' , foreignKey: 'projectId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: 'Project',
      timestamps: false
    }
  }
}


module.exports = { PROJECT_TABLE, ProjectSchema, Project }
