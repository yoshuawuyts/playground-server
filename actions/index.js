/**
 * Module dependencies.
 */

/**
 * Expose `dispatcher()`.
 */

module.exports = dispatcher;

/**
 * Dispatcher.
 */

function dispatcher(ctx) {
  ctx.on('home', function() {
    console.log('home was emitted');
  });
}
