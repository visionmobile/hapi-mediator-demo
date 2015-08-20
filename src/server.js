import Hapi from 'hapi';
import controllers from './controllers';
import mediators from './mediators';

const server = new Hapi.Server();
server.connection({port: parseInt(process.env.PORT, 10) || 5000});

server.register([mediators.FooBar], function (err) {
  if (err) {
    console.error(err);
    return;
  }

  server.route({ method: 'GET', path: '/ping', handler: controllers.Ping.pong });
});

// start the server
server.start(() => {
  console.log('Server listening on port ' + server.info.port);
});
