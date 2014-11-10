/**
 * Expose `routes()`.
 */

module.exports = routes;

/**
 * Routes().
 *
 * @param {Function} router
 * @api public
 */

function routes(router) {
  var users = router.route('/');

  users.get(function* (next) {
    this.body = 'hello world';
  });

  users.post(function* (next) {
    // do stuff
  });

  users.patch(function* (next) {
    // do stuff
  });
}
