var s = hydrate = require('../hydrate');
require('isomorphic-fetch')

var fs = require('fs');
var path = require('path');
const indexHtml = fs.readFileSync(path.resolve('./src/index.html'), 'utf8');

module.exports = async (req, res) => {
  let x = await hydrate.renderToString(indexHtml);
  console.log(x);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('ok');
}
