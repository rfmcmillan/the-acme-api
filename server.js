const app = require('./app');
const { syncAndSeed } = require('./db');

const port = process.env.PORT || 3000;

const init = async () => {
  await syncAndSeed();
  app.listen(port, () => console.log(`listening on the port: ${port}`));
};

init();
