/* eslint-disable no-console */
/* eslint-disable no-undef */
const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    console.log(`Request: ${config.baseURL + config.url}`);
    console.log(`Method: ${config.method.toUpperCase()}`);
    console.log(`Headers: ${config.method.toUpperCase()}`);
    if (config.data) {
      console.log('Body:', config.data);
    }
    return config;
  },
  (error) => {
    console.error('Error message:' + error.message);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log('Response');
    console.log('Status' + response.status);
    console.log('Data' + response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        `Response error ${error.response.status} Data is: ${error.response.data}`
      );
    } else {
      console.error('Network error' + error.message);
    }
    return Promise.reject(error);
  }
);

describe('HomeWork14', () => {
  // get test1
  test('Get all posts', async () => {
    const response = await instance.get('/posts');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data).not.toBeNull();

    response.data.forEach((post) => {
      expect(post).toHaveProperty('userId');
      expect(typeof post.userId).toBe('number');
      expect(post.userId).toBeGreaterThan(0);

      expect(post).toHaveProperty('id');
      expect(typeof post.id).toBe('number');
      expect(post.id).toBeGreaterThan(0);

      expect(post).toHaveProperty('title');
      expect(typeof post.title).toBe('string');
      expect(post.title.length).toBeGreaterThan(0);

      expect(post).toHaveProperty('body');
      expect(typeof post.body).toBe('string');
      expect(post.body.length).toBeGreaterThan(0);
    });
  });

  test('Get specific post with valid data', async () => {
    const postId = 1;
    const response = await instance.get(`/posts/${postId}`);

    expect(response.status).toBe(200);

    const post = response.data;
    expect(post.id).toBe(postId);
    expect(typeof post.userId).toBe('number');
    expect(post.userId).toBeGreaterThan(0);
    expect(typeof post.title).toBe('string');
    expect(post.title.length).toBeGreaterThan(0);
    expect(typeof post.body).toBe('string');
    expect(post.body.length).toBeGreaterThan(0);
    expect(post.body).toContain('\n');
  });

  test('Get post comments correct structure', async () => {
    const postId = 1;
    const response = await instance.get(`/posts/${postId}/comments`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
    response.data.forEach((comment) => {
      expect(comment).toHaveProperty('postId');
      expect(typeof comment.postId).toBe('number');
      expect(comment.postId).toBe(postId);

      expect(comment).toHaveProperty('id');
      expect(typeof comment.id).toBe('number');
      expect(comment.id).toBeGreaterThan(0);

      expect(comment).toHaveProperty('name');
      expect(typeof comment.name).toBe('string');
      expect(comment.name.length).toBeGreaterThan(0);

      expect(comment).toHaveProperty('email');
      expect(typeof comment.email).toBe('string');
      expect(comment.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      expect(comment).toHaveProperty('body');
      expect(typeof comment.body).toBe('string');
      expect(comment.body.length).toBeGreaterThan(0);
    });
  });

  test('Create a new post and validate response structure', async () => {
    const newPost = {
      title: 'Title',
      body: 'body content\nwith multiple lines',
      userId: 1,
    };

    const response = await instance.post('/posts', newPost);

    expect(response.status).toBe(201);

    expect(response.data).toHaveProperty('id');
    expect(typeof response.data.id).toBe('number');
    expect(response.data.id).toBeGreaterThan(0);

    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });
  test('Create a new user and validate complex structure', async () => {
    const newUser = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'john.doe@example.com',
      address: {
        street: '123 Main St',
        city: 'New York',
        zipcode: '10001',
      },
    };

    const response = await instance.post('/users', newUser);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(typeof response.data.id).toBe('number');

    expect(response.data.name).toBe(newUser.name);
    expect(response.data.username).toBe(newUser.username);
    expect(response.data.email).toBe(newUser.email);
  });
});
