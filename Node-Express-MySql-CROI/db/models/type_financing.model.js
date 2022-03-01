const { Model, DataTypes, Sequelize } = require('sequelize');

const TYPE_FINANCING_TABLE = 'type_financing';

const TypeFinancingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class TypeFinancing extends Model {
  static associate(models) {
    TypeFinancing.hasMany(models.Project, {
      as: 'project',
      foreignKey: 'typeId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TYPE_FINANCING_TABLE,
      modelName: 'TypeFinancing',
      timestamps: false
    }
  }
}


module.exports = { TYPE_FINANCING_TABLE, TypeFinancingSchema, TypeFinancing }

