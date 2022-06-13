const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    tag_name: {
      type: Sequelize.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;


// SELECT 
// `product`.`id`, 
// `product`.`product_name`,
// `product`.`price`, 
// `product`.`stock`, 
// `product`.`category_id`, 
// `product`.`product_id`, 
// `category`.`id` AS `category.id`, 
// `category`.`category_name` AS `category.category_name` 
// FROM `product` AS `product` 
// LEFT OUTER JOIN `category` AS `category` 
// ON `product`.`product_id` = `category`.`id` 
// WHERE `product`.`id` = '1';