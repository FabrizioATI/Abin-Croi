'use strict';

const { USER_TABLE } = require('../models/user.model');
const { CATEGORY_TABLE } = require('./../models/category.model');
const { PROJECT_TABLE } = require('../models/project.model');
const { TYPE_FINANCING_TABLE } = require('../models/type_financing.model');
const { ACTIONS_TABLE } = require('../models/acciones.model');
const { INVESTMENT_TABLE } = require('../models/inversiones.model');
const { BOND_TABLE } = require('../models/bonos.model');
const { LOANS_TABLE } = require('../models/prestamos.model');

const { STATE_ACTIONS_TABLE } = require('../models/estado_accion.model');
const { ACTIONS_BUY_TABLE } = require('../models/acciones_compra.model');
const { BONDS_BUY_TABLE } = require('../models/bonos_compra.model');
const { INVESTMENT_BUY_TABLE } = require('../models/inversiones_compra.model');
const { ORDER_TABLE } = require('../models/orden.model');



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
        allowNull: true,
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
        allowNull: true,
        type: Sequelize.CHAR,
        field: 'bank_status',
      },
      bankAccount:{
        allowNull: true,
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
    await queryInterface.createTable(ACTIONS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        field: 'project_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: PROJECT_TABLE,
          key: 'id'
        },
      },
      nActionsSales: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'n_actions_sales',
      },
      purchasePrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'purchase_price',
      },
      sellingPrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'selling_price',
      },
      nActionsRest:{
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'n_actions_rest',
      }
    });
    await queryInterface.createTable(INVESTMENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        field: 'project_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: PROJECT_TABLE,
          key: 'id'
        },
      },
      totalAmount: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'total_amount',
      },
      remainingAmount: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'remaining_amount',
      },
      date:{
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
    await queryInterface.createTable(BOND_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        field: 'project_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: PROJECT_TABLE,
          key: 'id'
        },
      },
      amountBonds: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'amount_bonds',
      },
      rateYield: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'rate_yield',
      },
      numberBond:{
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'number_bond',
      },
      priceSale: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'price_sale',
      }
    });
    await queryInterface.createTable(LOANS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId: {
        field: 'project_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: PROJECT_TABLE,
          key: 'id'
        },
      },
      amountPrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'amount_price',
      },
      interest: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      lastDayPayment:{
        allowNull: false,
        type: Sequelize.DATE,
        field: 'last_day_payment',
      },
      datePaymentMonthly:{
        allowNull: false,
        type: Sequelize.DATE,
        field: 'date_payment_monthly',
      },
      typeLoan: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'type_loan',
      },
      penalty: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      totalPayment: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'total_payment',
      }
    });
    await queryInterface.createTable(STATE_ACTIONS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      time: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      advanceAmount:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'advance_amount'
      }
    });
    await queryInterface.createTable(ACTIONS_BUY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actionsId: {
        field: 'actions_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: ACTIONS_TABLE,
          key: 'id'
        },
      },
      stateId: {
        field: 'state_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: STATE_ACTIONS_TABLE,
          key: 'id'
        },
      },
      nActionsBuy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'n_actions_buy',
      },
      state: {
        allowNull: false,
        type: Sequelize.CHAR,
      },
      dateBuy: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'date_buy',
      },
      totalPay:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'total_pay',
      },
      voucherFile:{
        allowNull: false,
        type: Sequelize.STRING,
        field: 'voucher_file',
      }
    });
    await queryInterface.createTable(BONDS_BUY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bondsId: {
        field: 'bond_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: BOND_TABLE,
          key: 'id'
        },
      },
      nBondsBuy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'n_bond_buy',
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'start_date',
      },
      bondDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'bond_date',
      },
      vTotalPay:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'v_total_pay',
      }
    });
    await queryInterface.createTable(INVESTMENT_BUY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      investmentId: {
        field: 'investment_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: INVESTMENT_TABLE,
          key: 'id'
        },
      },
      investmentAmount: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'investment_amount'
      },
      profitAmount: {
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'profit_amount'
      },
      startDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'start_date',
      },
      paymentDate:{
        allowNull: false,
        type: Sequelize.DATE,
        field: 'payment_date',
      },
      profitRate:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'profit_rate',
      },
      hourRate:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'hour_rate',
      },
      dayRate:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'day_rate',
      },
      monthRate:{
        allowNull: false,
        type: Sequelize.FLOAT,
        field: 'month_rate',
      }
    });
    await queryInterface.createTable(ORDER_TABLE, {
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
      actionsBuyId: {
        field: 'actions_buy_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: ACTIONS_BUY_TABLE,
          key: 'id'
        },
      },
      investmentsBuyId: {
        field: 'investment_buy_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: INVESTMENT_BUY_TABLE,
          key: 'id'
        },
      },
      bondsBuyId: {
        field: 'bonds_buy_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: BONDS_BUY_TABLE,
          key: 'id'
        },
      },
      loansId: {
        field: 'loans_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: LOANS_TABLE,
          key: 'id'
        },
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(TYPE_FINANCING_TABLE);
    await queryInterface.dropTable(PROJECT_TABLE);
    await queryInterface.dropTable(ACTIONS_TABLE);
    await queryInterface.dropTable(INVESTMENT_TABLE);
    await queryInterface.dropTable(BOND_TABLE);
    await queryInterface.dropTable(LOANS_TABLE);

    await queryInterface.dropTable(STATE_ACTIONS_TABLE);
    await queryInterface.dropTable(ACTIONS_BUY_TABLE);
    await queryInterface.dropTable(BONDS_BUY_TABLE);
    await queryInterface.dropTable(INVESTMENT_BUY_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);


  }
};
