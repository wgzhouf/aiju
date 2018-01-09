const fs = require('fs');
const path = require('path');
var post = async (ctx, next) => {
  if ('POST' != ctx.method)
    return await next();
  let file = ctx.request.body.files.imagefile;

  let reader = fs.createReadStream(file.path);
  let target_file_path = path.join(__dirname.replace('controllers', 'bigshot_image'), file.name);
  let stream = fs.createWriteStream(target_file_path);
  reader.pipe(stream);
  ctx.response.body = `<h1>${target_file_path}</h1>`;
};

var get = async (ctx, next) => {
  if ('GET' != ctx.method)
    return await next();
  ctx.response.body = `<html><head><title>upload test</title></head><body>
<form id="testupload" method="post" enctype="multipart/form-data" action="/weapp/uploadimage">
    上传图片<input id="file" name="imagefile" type="file" accept="image/png"/>
    <input type="submit" value="提交"/>
</form>
</body></html>`;
};

module.exports = {
  post,
  get
};