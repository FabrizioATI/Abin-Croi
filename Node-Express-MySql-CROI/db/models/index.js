const {User, UserSchema} = require('./user.model')
const { Category, CategorySchema } = require('./category.model');
const {Project, ProjectSchema} = require('./project.model')
const {TypeFinancing, TypeFinancingSchema} = require('./type_financing.model')


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize)),
    TypeFinancing.init(TypeFinancingSchema, TypeFinancing.config(sequelize))
    Category.init(CategorySchema, Category.config(sequelize));
    Project.init(ProjectSchema, Project.config(sequelize))

    //relaciones
    User.associate(sequelize.models);
    TypeFinancing.associate(sequelize.models);
    Category.associate(sequelize.models);
    Project.associate(sequelize.models);
}

module.exports = setupModels;
