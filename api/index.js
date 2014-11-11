/**
 * Module dependencies.
 */

var responseTime = require('koa-response-time');
var trieRouter = require('koa-trie-router');
var compress = require('koa-compress');
var compose = require('koa-compose');
var session = require('koa-session');
var logger = require('koa-logger');
var helmet = require('koa-helmet');
var parse = require('co-body');
var koa = require('koa');

var actions = require('../actions/index');
var users = require('./users/index');
var home = require('./home/index');

var env = process.env.NODE_ENV || 'development';
var port = process.env.port || 1337;

/**
 * Create koa context.
 */

var app = koa();

/**
 * Exports
 */

module.exports = app;

/**
 * Middleware
 */

if ('test' != process.env.NODE_ENV) app.use(logger());
app.use(responseTime());

/**
 * Routes.
 */

app.use(trieRouter(app));

home(app);
users(app);

/**
 * Register actions.
 */

actions(app);

/**
 * Start listening.
 */

if (!module.parent) {
  console.log('');
  console.log('  Port ' + port);
  console.log('  Env  ' + env);
  console.log('');
  app.listen(port);
}
