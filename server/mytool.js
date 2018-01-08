const fs = require('fs');
var readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if (error){
        console.log(filename + ' 不存在');
        reject(new Error(filename + ' 不存在'));
      }
      else
        resolve(data);
    });
  });
}

module.export={
  readFileAsync: readFileAsync
}