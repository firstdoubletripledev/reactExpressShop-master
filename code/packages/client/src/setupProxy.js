// import proxy module from http-proxy-middleware
const proxy = require('http-proxy-middleware');

/**
 *
 * set proxy url for dev
 * @param {*} app
 */
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:5000/' }));
};
