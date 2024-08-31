
import request from 'supertest';
import { describe, expect, test } from '@jest/globals';
process.env.NODE_ENV = 'test';

import { app } from '../app';
import { connectToMongo, disconnectMongo } from '../mongo';

const newUser = { username: 'Dave', email: 'dave@example.com', role: 'user' };
let userId = '';

beforeAll(async () => {
  await connectToMongo();
});

afterAll(async () => {
  await request(app).delete('/api/users/delete');
  await disconnectMongo();
});

describe('User tests', () => {
  test('should get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual([]);
  });
  test('should count all users', async () => {
    const res = await request(app).get('/api/users/count');
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual(0);
  });
  test('should create a new user', async () => {
    const res = await request(app).post('/api/user').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newUser);
    userId = res.body._id;
  });
  test('should get a user by id', async () => {
    const res = await request(app).get(`/api/user/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(newUser);
  });
  test('should update a user by id', async () => {
    const res = await request(app).put(`/api/user/${userId}`).send({ username: 'Dave2' });
    expect(res.statusCode).toBe(200);
  });
  test('should delete a user by id', async () => {
    const res = await request(app).delete(`/api/user/${userId}`);
    expect(res.statusCode).toBe(200);
  });
});
