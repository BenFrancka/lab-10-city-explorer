require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');


describe('app routes', () => {
  describe('routes', () => {
    
  
    test('returns location search', async() => {

      const expectation = {
        'formatted_query': 'Midland County, Texas, USA',
        'latitude': '31.83688',
        'longitude':'-102.0103767'
      };

      const data = await fakeRequest(app)
        .get('/location?search=midland')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });


  });
});
