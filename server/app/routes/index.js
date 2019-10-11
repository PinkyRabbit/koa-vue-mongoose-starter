const Router = require('koa-router');
const compose = require('koa-compose');

const admin = require('./api/admin');
const auth = require('./api/auth');

const routes = [
  admin,
  auth,
];

const router = new Router({
  prefix: '/api/v1',
});

const api = () => {
  routes.forEach((route) => {
    route(router);
  });
  return compose([
    router.routes(),
    router.allowedMethods(),
  ]);
};

module.exports = api;
