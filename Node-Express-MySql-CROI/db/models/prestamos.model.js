const { Model, DataTypes, Sequelize } = require('sequelize');

const LOANS_TABLE = 'loans';
const { PROJECT_TABLE } = require('./project.model')

const LoansSchema = {
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
  amountPrice: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'amount_price',
  },
  interest: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  lastDayPayment:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'last_day_payment',
  },
  datePaymentMonthly:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date_payment_monthly',
  },
  typeLoan: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'type_loan',
  },
  penalty: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  totalPayment: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'total_payment',
  }
}

class Loans extends Model {
  static associate(models) {
    Loans.belongsTo(models.Project, { as: 'project' , foreignKey: 'projectId'});
    Loans.hasMany(models.Order, { as: 'order' , foreignKey: 'loansId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LOANS_TABLE,
      modelName: 'Loans',
      timestamps: false
    }
  }
}


module.exports = { LOANS_TABLE, LoansSchema, Loans }
