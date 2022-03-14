const { Model, DataTypes, Sequelize } = require('sequelize');

const ACTIONS_BUY_TABLE = 'actions_buy';
const { ACTIONS_TABLE } = require('./acciones.model')
const { STATE_ACTIONS_TABLE } = require('./estado_accion.model')

const ActionsBuySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  actionsId: {
    field: 'actions_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ACTIONS_TABLE,
      key: 'id'
    },
  },
  stateId: {
    field: 'state_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STATE_ACTIONS_TABLE,
      key: 'id'
    },
  },
  nActionsBuy: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'n_actions_buy',
  },
  state: {
    allowNull: false,
    type: DataTypes.CHAR,
  },
  dateBuy: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date_buy',
  },
  totalPay:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'total_pay',
  },
  voucherFile:{
    allowNull: false,
    type: DataTypes.STRING,
    field: 'voucher_file',
  }
}

class ActionsBuy extends Model {
  static associate(models) {
    ActionsBuy.belongsTo(models.Actions, { as: 'actions' , foreignKey: 'actionsId'});
    ActionsBuy.belongsTo(models.StateActions, { as: 'stateactions' , foreignKey: 'stateId'});
    ActionsBuy.hasMany(models.Order, { as: 'order' , foreignKey: 'actionsBuyId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTIONS_BUY_TABLE,
      modelName: 'ActionsBuy',
      timestamps: false
    }
  }
}


module.exports = { ACTIONS_BUY_TABLE, ActionsBuySchema, ActionsBuy }
