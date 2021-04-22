const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

//this is prof's workaround for the SSL error that occurs when deploying to heroku. Alternatively, in the CLI, you can enter 'heroku config:set PGSSLMODE=no-verify -a <your-app's name>'

const config = {};

if (process.env.SSL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/acme_db'
);

const Product = db.define('product', {
  name: DataTypes.STRING,
});

const syncAndSeed = async () => {
  await db.sync({ force: true });
  await Product.create({ name: 'foo' });
  await Product.create({ name: 'bar' });
};

module.exports = { syncAndSeed, models: { Product } };
