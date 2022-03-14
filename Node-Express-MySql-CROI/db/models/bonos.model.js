const { Model, DataTypes, Sequelize } = require('sequelize');

const BOND_TABLE = 'bonds';
const { PROJECT_TABLE } = require('./project.model')

const BondSchema = {
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
  amountBonds: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'amount_bonds',
  },
  rateYield: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'rate_yield',
  },
  numberBond:{
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'number_bond',
  },
  priceSale: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'price_sale',
  }
}

class Bond extends Model {
  static associate(models) {
    Bond.belongsTo(models.Project, { as: 'project' , foreignKey: 'projectId'});
    Bond.hasMany(models.BondsBuy, { as: 'bondsbuy' , foreignKey: 'bondsId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: BOND_TABLE,
      modelName: 'Bond',
      timestamps: false
    }
  }
}


module.exports = { BOND_TABLE, BondSchema, Bond }
