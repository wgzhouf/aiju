const db = require('../db');
/*
var contact = db.defineModel('type_of_product', {
  type_id: {
    type: db.INTEGER(10),
    primaryKey: true
  },
  type_name_of_product: db.STRING(50)
});*/

var findAll_type_of_product = function () {
  return db.MYSQL_CLIENT.query('select * from type_of_product', { type: db.SELECT});
};

module.exports = {
  findAll_type_of_product: findAll_type_of_product
};