const db = require('../db');
var contact = db.defineModel('type_of_product', {
  type_id: {
    type: db.INTEGER(10),
    primaryKey: true
  },
  type_name_of_product: db.STRING(50)
});

var findAll_type_of_product = function (where_value) {
  return contact.findAll(where_value);
};

module.exports = {
  findAll_type_of_product: findAll_type_of_product
};