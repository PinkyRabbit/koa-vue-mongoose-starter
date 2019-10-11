// Node.js http server default timeout is 120 seconds: https://github.com/koajs/koa/issues/766

const cleanTimeout = async (ctx, next) => {
  ctx.req.setTimeout(0);
  await next();
};

module.exports = cleanTimeout;
