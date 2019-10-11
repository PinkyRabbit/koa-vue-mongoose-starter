require('dotenv').config();

const Koa = require('koa');

const db = require('./db');
const api = require('./routes');
const middlewares = require('./middlewares');

const app = new Koa();
const port = process.env.PORT || 3000;
const appListen = () => Promise.resolve(app.listen(port));

db.connect()
  .then(() => {
    middlewares(app);
    app.use(api());
    app.use((ctx) => { ctx.status = 404 });
    return appListen();
  })
  .then((server) => {
    const port = server.address().port;
    let host = server.address().address;
    if (host === '::') {
      host = 'localhost';
    }

    console.log('App listening at http://%s:%s', host, port);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
