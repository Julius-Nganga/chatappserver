import request from 'supertest';
import app from '../app.js';

describe('GET /api/test', () => {
  it('should return a JSON message', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from test route');
  });
});
