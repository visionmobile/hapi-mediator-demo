class FooBar {

  static register(server, options, next) {

    server.ext('onPreHandler', function (request, reply) {
      setTimeout(() => {
        request.data = {
          name: 'Olaf'
        };

        reply.continue();
      }, 100);
    });

    next();
  }

}

FooBar.register.attributes = {
  name: 'FooBar',
  version: '1.0.0'
};

export default FooBar;
