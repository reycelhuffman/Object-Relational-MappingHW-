// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {

  foreignKey: 'category_id'
});
// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
  
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
