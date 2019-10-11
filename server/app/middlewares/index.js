const serve = require('koa-static');
const json = require('koa-json');
const cors = require('@koa/cors');
const body = require('koa-bodyparser');

const cleanQuery = require('./helpers/cleanQuery');
const cleanTimeout = require('./helpers/cleanTimeout');

module.exports = (app) => {
  app.use(body({
    enableTypes: ['json', 'form', 'text'],
  }));
  app.use(json());
  app.use(cors({
    credentials: true,
  }));

  app.use(cleanTimeout);
  app.use(serve('./resources', { maxage: 1000 * 60 * 60 * 24 }));
  app.use(cleanQuery);
};
