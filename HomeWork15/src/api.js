/* eslint-disable no-useless-catch */
const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

api.interceptors.request.use(
  (config) => {
    if (!config.headers['X-Custom-Header']) {
      config.headers['X-Custom-Header'] = 'MyDefaultHeader';
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(new Error(`Server error ${error.response.status}`));
    } else if (error.request || error.message === 'Network Error') {
      return Promise.reject(new Error('No response (network error)'));
    } else {
      return Promise.reject(new Error('Unexpected error: ' + error.message));
    }
  }
);

/**
 * Завдання 1
 * Напишіть функцію за допомогою Axios, яка навмисно надсилає запит на неправильну URL-адресу,
 * викликаючи помилку. Потім за допомогою Jest напишіть тест, який перевіряє,
 * чи правильно обробляється помилка та чи повертається належне повідомлення про помилку.
 */
async function badUrlRequest() {
  try {
    return await api.get('/404-not-found');
  } catch (err) {
    throw err;
  }
}

/**
 * Завдання 2
 * Створіть функцію за допомогою Axios, щоб зробити запит, який містить кастомні хедери та параметри URL-адреси.
 * Напишіть тест Jest, щоб переконатися, що заголовки та параметри правильно включені в запит.
 */
async function getWithHeadersAndParams(params = {}, headers = {}) {
  try {
    const resp = await api.get('/posts', { params, headers });
    return resp.data;
  } catch (err) {
    throw new Error('Request failed');
  }
}

/**
 * Завдання 3
 * Замість того, щоб робити фактичні HTTP-запити,
 * використовуйте Jest, щоб налаштувати моки на реквести з Axios.
 * Напишіть тести, які імітують як успішні, так і невдалі HTTP-запити, до замоканих ендпойнтів,
 * і переконайтеся, що ваш код поводиться належним чином.
 */
async function fetchPost(id) {
  try {
    const resp = await api.get(`/posts/${id}`);
    return resp.data;
  } catch (err) {
    throw new Error('Failed to fetch post');
  }
}

module.exports = {
  badUrlRequest,
  getWithHeadersAndParams,
  fetchPost,
  api,
};
