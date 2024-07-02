const { test, expect } = require('@playwright/test');
const axios = require('axios');

test.describe('Chuck Norris API', () => {
  const apiUrl = 'https://api.chucknorris.io/jokes/random';

  test('should return a joke with correct structure', async () => {
    const response = await axios.get(apiUrl);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('value');
    expect(response.data).toHaveProperty('url');
    expect(typeof response.data.id).toBe('string');
    expect(typeof response.data.value).toBe('string');
    expect(typeof response.data.url).toBe('string');
  });

  test('should return different jokes on multiple requests', async () => {
    const response1 = await axios.get(apiUrl);
    const response2 = await axios.get(apiUrl);

    expect(response1.status).toBe(200);
    expect(response2.status).toBe(200);
    expect(response1.data.id).not.toBe(response2.data.id);
    expect(response1.data.value).not.toBe(response2.data.value);
  });
});