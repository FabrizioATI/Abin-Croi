const { Model, DataTypes, Sequelize } = require('sequelize');

const STATE_ACTIONS_TABLE = 'state_actions';

const StateActionsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  type: {
    allowNull: false,
    type: DataTypes.CHAR
  },
  time: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  advanceAmount:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'advance_amount'
  }
}

class StateActions extends Model {
  static associate(models) {
    StateActions.hasMany(models.ActionsBuy, { as: 'actionsbuy' , foreignKey: 'stateId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: STATE_ACTIONS_TABLE,
      modelName: 'StateActions',
      timestamps: false
    }
  }
}


module.exports = { STATE_ACTIONS_TABLE, StateActionsSchema, StateActions }
