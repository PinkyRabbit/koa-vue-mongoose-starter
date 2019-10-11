module.exports = (router) => {
  router
    .get('/', (ctx) => {
      ctx.body = { test: 'OK' };
    });
    // .get('/auth/is-authenticated', isAuthenticated(), prepareResponseForIsAuthenticated)
    // .get('/auth/logout', logout)
    // .post('/auth/login', authEmail(), isAdminPermitted, isClientActive, assignPersonalSurvey, generateToken())
    // .post('/auth/register', register, generateToken());
};
