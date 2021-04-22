const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
  beforeEach(() => syncAndSeed());
  describe('GET /', () => {
    it('show information about the api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.include('The Acme API');
    });
  });
  describe('GET /api/products', () => {
    it('returns products', async () => {
      const response = await app.get('/api/products');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(2);
    });
    it('sends cors header', async () => {
      const response = await app.get('/api/products');
      expect(response.status).to.equal(200);
      //this shows that you are allowing people to access api
      expect(response.headers['access-control-allow-origin']).to.equal('*');
    });
  });
});
