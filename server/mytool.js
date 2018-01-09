const fs = require('fs');

var readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if (error)
        reject(new Error(filename + ' 不存在'));
      else
        resolve(data);
    });
  });
}

var checkOutDir = (path) => {
  if (!fs.existsSync(path)){
    console.log(path+'不存在，正在创建')
    fs.mkdirSync(path)
  }
  return 1;
};

module.exports = {
  readFileAsync: readFileAsync,
  checkOutDir: checkOutDir
}