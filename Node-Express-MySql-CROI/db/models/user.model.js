const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name'
  },
  phoneNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'phone_number'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastDay: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'last_day',
    defaultValue: Sequelize.NOW
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  ruc: {
    allowNull: false,
    type: DataTypes.CHAR,
  },
  mannager: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cui: {
    allowNull: false,
    type: DataTypes.CHAR,
    unique: true,
  },
  specialUser: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'special_user',
    defaultValue: false
  },
  bankStatus:{
    allowNull: true,
    type: DataTypes.CHAR,
    field: 'bank_status',
  },
  bankAccount:{
    allowNull: true,
    type: DataTypes.CHAR,
    field: 'bank_account',
  },
  errors:{
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  recoveryToken: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'recovery_token'
  }
}

class User extends Model {
  static associate(models) {
    User.hasMany(models.Project, {as: 'project',foreignKey: 'userId'});
    User.hasMany(models.Order, { as: 'order' , foreignKey: 'userId'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
