/**
 * Module dependencies.
 */

var dispatcher = require('simple-dispatcher');

/**
 * Expose `eventMap()`.
 */

module.exports = eventMap;

/**
 * Map event listeners onto the context.
 *
 * @api {EventEmitter} ctx
 * @api public
 */

function eventMap(ctx) {
  dispatcher(ctx, {});
}
