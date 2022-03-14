const { Model, DataTypes, Sequelize } = require('sequelize');

const INVESTMENT_BUY_TABLE = 'investment_buy';
const { INVESTMENT_TABLE } = require('./inversiones.model')

const InvestmentBuySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  investmentId: {
    field: 'investment_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INVESTMENT_TABLE,
      key: 'id'
    },
  },
  investmentAmount: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'investment_amount'
  },
  profitAmount: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'profit_amount'
  },
  startDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'start_date',
  },
  paymentDate:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'payment_date',
  },
  profitRate:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'profit_rate',
  },
  hourRate:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'hour_rate',
  },
  dayRate:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'day_rate',
  },
  monthRate:{
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'month_rate',
  }
}

class InvestmentBuy extends Model {
  static associate(models) {
    InvestmentBuy.belongsTo(models.Investment, { as: 'investment' , foreignKey: 'investmentId'});
    InvestmentBuy.hasMany(models.Order, { as: 'order' , foreignKey: 'investmentsBuyId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INVESTMENT_BUY_TABLE,
      modelName: 'InvestmentBuy',
      timestamps: false
    }
  }
}


module.exports = { INVESTMENT_BUY_TABLE, InvestmentBuySchema, InvestmentBuy }

