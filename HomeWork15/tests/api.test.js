/* eslint-disable no-console */
/* eslint-disable no-undef */
const AxiosMockAdapter = require('axios-mock-adapter');
const {
  badUrlRequest,
  getWithHeadersAndParams,
  fetchPost,
  api,
} = require('../src/api.js');

describe('Task 1: badUrlRequest', () => {
  let mock;
  beforeAll(() => {
    mock = new AxiosMockAdapter(api);
  });
  afterEach(() => {
    mock.reset();
  });

  test('handles server error (404)', async () => {
    mock.onGet('/404-not-found').reply(404);

    await expect(badUrlRequest()).rejects.toThrow('Server error 404');
  });

  test('handles network error (no response)', async () => {
    mock.onGet('/404-not-found').networkError();

    await expect(badUrlRequest()).rejects.toThrow(
      'No response (network error)'
    );
  });

  test('handles unexpected error', async () => {
    const error = new Error('Something weird');
    mock.onGet('/404-not-found').reply(() => {
      throw error;
    });

    await expect(badUrlRequest()).rejects.toThrow(
      'Unexpected error: Something weird'
    );
  });
});

describe('Task 2: getWithHeadersAndParams', () => {
  test('sends headers and params correctly', async () => {
    const mockData = [{ id: 1, title: 'test' }];
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: mockData });

    const params = { userId: 1 };
    const headers = { Authorization: 'Bearer token123' };

    const result = await getWithHeadersAndParams(params, headers);

    expect(result).toEqual(mockData);
    expect(api.get).toHaveBeenCalledWith('/posts', { params, headers });
  });

  test('works with empty params and headers', async () => {
    const mockData = [];
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: mockData });

    const result = await getWithHeadersAndParams();
    expect(result).toEqual(mockData);
  });

  test('throws custom error when request fails', async () => {
    const error = new Error('Boom');
    jest.spyOn(api, 'get').mockRejectedValueOnce(error);

    await expect(getWithHeadersAndParams()).rejects.toThrow('Request failed');
  });
});

describe('Task 3: fetchPost with mocks', () => {
  test('returns post on success', async () => {
    const post = { id: 1, title: 'hello' };
    jest.spyOn(api, 'get').mockResolvedValueOnce({ data: post });

    const result = await fetchPost(1);
    expect(result).toEqual(post);
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('id', 1);
  });

  test('throws error on failure (500)', async () => {
    const error = new Error('Internal error');
    error.response = { status: 500 };
    jest.spyOn(api, 'get').mockRejectedValueOnce(error);

    await expect(fetchPost(99)).rejects.toThrow('Failed to fetch post');
  });

  test('throws error if called with invalid ID', async () => {
    jest.spyOn(api, 'get').mockRejectedValueOnce(new Error('Invalid ID'));
    await expect(fetchPost(null)).rejects.toThrow();
    await expect(fetchPost('abc')).rejects.toThrow();
  });
});

describe('Interceptors', () => {
  test('adds default X-Custom-Header if not provided', async () => {
    const req = { headers: {} };
    const result = api.interceptors.request.handlers[0].fulfilled(req);
    expect(result.headers['X-Custom-Header']).toBe('MyDefaultHeader');
  });

  test('response interceptor transforms errors correctly (server error)', async () => {
    const error = { response: { status: 403 } };
    await expect(
      api.interceptors.response.handlers[0].rejected(error)
    ).rejects.toThrow('Server error 403');
  });

  test('response interceptor transforms errors correctly (network error)', async () => {
    const error = { request: {} };
    await expect(
      api.interceptors.response.handlers[0].rejected(error)
    ).rejects.toThrow('No response (network error)');
  });

  test('response interceptor transforms unexpected errors correctly', async () => {
    const error = new Error('Weird error');
    await expect(
      api.interceptors.response.handlers[0].rejected(error)
    ).rejects.toThrow('Unexpected error: Weird error');
  });
});
