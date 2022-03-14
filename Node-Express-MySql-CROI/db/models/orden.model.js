const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'order';
const { ACTIONS_BUY_TABLE } = require('./acciones_compra.model')
const { INVESTMENT_BUY_TABLE } = require('./inversiones_compra.model')
const { BONDS_BUY_TABLE } = require('./bonos_compra.model')
const { LOANS_TABLE } = require('./prestamos.model')
const { USER_TABLE } = require('./user.model')


const OrderSchema = {
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
  actionsBuyId: {
    field: 'actions_buy_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ACTIONS_BUY_TABLE,
      key: 'id'
    },
  },
  investmentsBuyId: {
    field: 'investment_buy_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INVESTMENT_BUY_TABLE,
      key: 'id'
    },
  },
  bondsBuyId: {
    field: 'bonds_buy_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BONDS_BUY_TABLE,
      key: 'id'
    },
  },
  loansId: {
    field: 'loans_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LOANS_TABLE,
      key: 'id'
    },
  }

}

class Order extends Model {
  static associate(models) {
    Order.belongsTo(models.ActionsBuy, { as: 'actionsbuy' , foreignKey: 'actionsBuyId'});
    Order.belongsTo(models.InvestmentBuy, { as: 'investmentbuy' , foreignKey: 'investmentsBuyId'});
    Order.belongsTo(models.BondsBuy, { as: 'bondsbuy' , foreignKey: 'bondsBuyId'});
    Order.belongsTo(models.Loans, { as: 'loans' , foreignKey: 'loansId'});
    Order.belongsTo(models.User, { as: 'user' , foreignKey: 'userId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}


module.exports = { ORDER_TABLE, OrderSchema, Order }
