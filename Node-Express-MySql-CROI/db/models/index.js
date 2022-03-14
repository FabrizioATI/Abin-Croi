const {User, UserSchema} = require('./user.model')
const {Category, CategorySchema} = require('./category.model');
const {Project, ProjectSchema} = require('./project.model')
const {TypeFinancing, TypeFinancingSchema} = require('./type_financing.model')
const {Actions, ActionsSchema} = require('./acciones.model')
const {Bond, BondSchema} = require('./bonos.model')
const {Investment, InvestmentSchema} = require('./inversiones.model')
const {Loans, LoansSchema} = require('./prestamos.model')
const {StateActions, StateActionsSchema} = require('./estado_accion.model')
const {ActionsBuy, ActionsBuySchema} = require('./acciones_compra.model')
const {BondsBuy, BondsBuySchema} = require('./bonos_compra.model')
const {InvestmentBuy, InvestmentBuySchema} = require('./inversiones_compra.model')
const {Order, OrderSchema} = require('./orden.model')


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize)),
    TypeFinancing.init(TypeFinancingSchema, TypeFinancing.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize));
    Project.init(ProjectSchema, Project.config(sequelize))
    Actions.init(ActionsSchema, Actions.config(sequelize))
    Bond.init(BondSchema, Bond.config(sequelize))
    Investment.init(InvestmentSchema, Investment.config(sequelize))
    Loans.init(LoansSchema, Loans.config(sequelize))
    
    StateActions.init(StateActionsSchema, StateActions.config(sequelize))
    ActionsBuy.init(ActionsBuySchema, ActionsBuy.config(sequelize))
    BondsBuy.init(BondsBuySchema, BondsBuy.config(sequelize))
    InvestmentBuy.init(InvestmentBuySchema, InvestmentBuy.config(sequelize))
    Order.init(OrderSchema, Order.config(sequelize))

    //relaciones
    User.associate(sequelize.models);
    TypeFinancing.associate(sequelize.models);
    Category.associate(sequelize.models);
    Project.associate(sequelize.models);
    Actions.associate(sequelize.models);
    Bond.associate(sequelize.models);
    Investment.associate(sequelize.models);
    Loans.associate(sequelize.models);
    StateActions.associate(sequelize.models);
    ActionsBuy.associate(sequelize.models);
    BondsBuy.associate(sequelize.models);
    InvestmentBuy.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = setupModels;
