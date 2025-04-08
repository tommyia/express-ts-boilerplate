import { describe, expect, test } from '@jest/globals';
import express from 'express';
import request from 'supertest';

// Create a simple express app for testing
const app = express();
app.get('/', (_req, res) => {
  res.send('Hello World');
});

describe('API Routes', () => {
  test('GET / should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
}); 