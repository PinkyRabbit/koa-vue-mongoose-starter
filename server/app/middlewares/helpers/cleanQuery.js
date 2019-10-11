/**
 * WARNING!
 * Middleware remove the t field from the query parameters.
 * The field is added on all frontends to fix the issue
 * with the cache of requests in IE.
 */

module.exports = (ctx, next) => {
  delete ctx.query.t;
  return next();
};
