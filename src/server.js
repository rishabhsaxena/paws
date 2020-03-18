const next = require('next');
const nextApp = next({ dir: './src', dev: process.env.NODE_ENV !== 'production' }); // eslint-disable-line
const handle = nextApp.getRequestHandler();
const express = require('express');
const port = 3000;

nextApp.prepare().then(() => {
  const app = express();

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port), () => {
    console.log('server listening on port', port);
  };
});
