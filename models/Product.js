// import important parts of sequelize library
const { Model, DataTypes, Sequelize } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false,
      isDecimal: true
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
