const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
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
