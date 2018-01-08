const mytool = require('../mytool.js');
var path = require('path');

var showimage = async (ctx, next) => {
  let status = 404;
  let picture_url = ctx.params.pictureurl;

  if (picture_url.endsWith('_big.png')) {
    picture_url = path.join(__dirname.replace('controllers', 'bigshot_image'), picture_url);
    status = 200;
  }
  else if (picture_url.endsWith('_snap.png')) {
    picture_url = path.join(__dirname.replace('controllers', 'snapshot_image'), picture_url);
    status = 200;
  }
  else {
    status = 404;
  }

  if (status === 200) {
    try {
      var picture = await mytool.readFileAsync(picture_url);
      status = 200;
    } catch (error) {
      status = 404;
    }
  }

  if (status === 200) {
    ctx.res.writeHead(200, { 'Content-Type': 'image/png' });
    ctx.res.write(picture, 'binary');
  } else {
    ctx.res.writeHead(404, { 'Content-Type': 'text/html' });
    ctx.res.write('not found', 'utf-8');
  }
  ctx.res.end();
}

async function get(ctx, next) {
  showimage(ctx,next);
}

module.exports = {
  get
}