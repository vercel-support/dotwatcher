const nextRoutes = require('next-routes');

const routes = module.exports = nextRoutes();

routes.add('race', '/race/:id');
routes.add('post', '/post/:id');
routes.add('about', '/about-us/:foo(bar|baz)');
