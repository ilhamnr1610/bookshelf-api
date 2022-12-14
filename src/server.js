const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = new Hapi.Server({
    port: 5001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
