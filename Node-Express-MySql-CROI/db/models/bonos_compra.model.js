const { Model, DataTypes, Sequelize } = require('sequelize');

const BONDS_BUY_TABLE = 'bonds_buy';
const { BOND_TABLE } = require('./bonos.model')

const BondsBuySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  bondsId: {
    field: 'bond_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BOND_TABLE,
      key: 'id'
    },
  },
  nBondsBuy: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'n_bond_buy',
  },
  startDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'start_date',
  },
  bondDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'bond_date',
  },
  vTotalPay:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'v_total_pay',
  }
}

class BondsBuy extends Model {
  static associate(models) {
    BondsBuy.belongsTo(models.Bond, { as: 'bond' , foreignKey: 'bondsId'});
    BondsBuy.hasMany(models.Order, { as: 'order' , foreignKey: 'bondsBuyId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: BONDS_BUY_TABLE,
      modelName: 'BondsBuy',
      timestamps: false
    }
  }
}


module.exports = { BONDS_BUY_TABLE, BondsBuySchema, BondsBuy }
