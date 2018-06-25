const config = require('../config.js');

module.exports = {
  client: 'mysql',
  connection: {
    host: config.database.host,
    user:  config.database.user,
    password: config.database.password,
    database: config.database.database,
    useNullAsDefault: true
  }
};