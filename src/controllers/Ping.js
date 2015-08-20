/**
 * @module controllers/ping
 */

function pre1(request, reply) {
  setTimeout(() => {
    return reply('Hello');
  }, 100);
}

function pre2(request, reply) {
  return reply('World');
}

var pong = {
  pre: [
    {method: pre1, assign: 'foo'},
    {method: pre2, assign: 'bar'}
  ],
  handler: function (request, reply) {
    reply(`pong ${request.pre.foo} ${request.pre.bar}`).type('text/plain');
  }
};

export {pong};
