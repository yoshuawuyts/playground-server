/**
 * Module dependencies.
 */

var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var compose = require('koa-compose');
var session = require('koa-session');
var logger = require('koa-logger');
var helmet = require('koa-helmet');
var parse = require('co-body');
var koa = require('koa');

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
 * Start listening.
 */

if (!module.parent) {
  console.log('');
  console.log('Port: ' + port);
  console.log('Env:  ' + env);
  app.listen(port);
}
