'use strict';

const { USER_TABLE } = require('../models/user.model');
const { CATEGORY_TABLE } = require('./../models/category.model');
const { PROJECT_TABLE } = require('../models/project.model');
const { TYPE_FINANCING_TABLE } = require('../models/type_financing.model');



module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name'
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name'
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'phone_number'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastDay: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'last_day',
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      },
      ruc: {
        allowNull: false,
        type: Sequelize.CHAR,
      },
      mannager: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cui: {
        allowNull: false,
        type: Sequelize.CHAR,
        unique: true,
      },
      specialUser: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        field: 'special_user',
        defaultValue: false
      },
      bankStatus:{
        allowNull: false,
        type: Sequelize.CHAR,
        field: 'bank_status',
      },
      bankAccount:{
        allowNull: false,
        type: Sequelize.CHAR,
        field: 'bank_account',
      },
      errors:{
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'customer'
      },
      recoveryToken: {
        allowNull: true,
        type: Sequelize.STRING,
        field: 'recovery_token'
      }
    });
    await queryInterface.createTable(CATEGORY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(TYPE_FINANCING_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(PROJECT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
      },
      categoryId: {
        field: 'category_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: CATEGORY_TABLE,
          key: 'id'
        },
      },
      typeId: {
        field: 'type_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: TYPE_FINANCING_TABLE,
          key: 'id'
        },
      },
      nameProject: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'name_project',
        unique: true,
      },
      descriptionProject: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'description_project',
      },
      direction:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      fileURL:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'field_url',
      },
      nameEnterprise: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'name_enterprise',
      },
      state:{
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      imgURL:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'image_url',
      },
      videURL:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'video_url',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      },
      modifiedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'modified_at',
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(TYPE_FINANCING_TABLE);
    await queryInterface.dropTable(PROJECT_TABLE);
  }
};
