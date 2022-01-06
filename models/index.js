// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
//const { Router } = require('express');



// User.belongsTo(User, {
//   foreignKey: 'user_id'
// });

Product.belongsTo(Category, {
  foreignKey: "category_id",
})

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
