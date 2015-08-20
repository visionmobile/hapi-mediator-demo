/**
 * @module controllers/ping
 */

function pong(request, reply) {
  reply(`pong ${request.data.name}`).type('text/plain');
}

export {pong};
