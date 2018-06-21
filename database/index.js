const config = require('./config.js');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
  }
});

const bookshelf = require('bookshelf')(knex);

let test = bookshelf.Model.extend({
  tableName: 'test'
});