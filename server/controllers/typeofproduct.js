const typeofproduct = require('../models/type_of_product');

async function get(ctx, next) {
  let types = await typeofproduct.findAll_type_of_product();
  ctx.response.body = JSON.stringify(types);
}

module.exports = {
  get
}