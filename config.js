/**
 * config
 */

var path = require('path');

var config = {
  // mongodb 配置
  db: 'mongodb://127.0.0.1/uno_dev',
  db_name: 'uno',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,

  session_secret: 'I love UNO!',
  auth_cookie_name: 'uno_session',
};

module.exports = config;
