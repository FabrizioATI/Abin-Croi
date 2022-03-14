const { Model, DataTypes, Sequelize } = require('sequelize');

const INVESTMENT_TABLE = 'investments';
const { PROJECT_TABLE } = require('./project.model')

const InvestmentSchema = {
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
  totalAmount: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'total_amount',
  },
  remainingAmount: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'remaining_amount',
  },
  date:{
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}

class Investment extends Model {
  static associate(models) {
    Investment.belongsTo(models.Project, { as: 'project' , foreignKey: 'projectId'});
    Investment.hasMany(models.InvestmentBuy, { as: 'investmentbuy' , foreignKey: 'investmentId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INVESTMENT_TABLE,
      modelName: 'Investment',
      timestamps: false
    }
  }
}


module.exports = { INVESTMENT_TABLE, InvestmentSchema, Investment }
