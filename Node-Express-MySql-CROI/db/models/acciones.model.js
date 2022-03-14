const { Model, DataTypes, Sequelize } = require('sequelize');

const ACTIONS_TABLE = 'actions';
const { PROJECT_TABLE } = require('./project.model')

const ActionsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  projectId: {
    field: 'project_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROJECT_TABLE,
      key: 'id'
    },
  },
  nActionsSales: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'n_actions_sales',
  },
  purchasePrice: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'purchase_price',
  },
  sellingPrice: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'selling_price',
  },
  nActionsRest:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'n_actions_rest',
  }
}

class Actions extends Model {
  static associate(models) {
    Actions.belongsTo(models.Project, { as: 'project' , foreignKey: 'projectId'});
    Actions.hasMany(models.ActionsBuy, { as: 'actionsbuy' , foreignKey: 'actionsId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTIONS_TABLE,
      modelName: 'Actions',
      timestamps: false
    }
  }
}


module.exports = { ACTIONS_TABLE, ActionsSchema, Actions }
