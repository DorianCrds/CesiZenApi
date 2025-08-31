const request = require('supertest');
const app = require('../src/app.light');

describe('Healthcheck', () => {
    it('GET /health should return OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('OK');
    });
});

describe('Root', () => {
    it('GET / should return running message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('CesiZenApi is running');
    });
});
