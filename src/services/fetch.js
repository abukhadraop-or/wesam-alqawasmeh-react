/**
 * Make an HTTP request.
 *
 * @param {String} url Request URL.
 * @param {Object} [body = null] Object contains request data.
 * @param {String} [method = "GET"] Request method.
 * @param {Object} [headers = {}] Object contains request headers.
 *
 * @return Promise fulfilled with response data.
 */
const fetchData = async (url, data = null, method = 'GET', headers = {}) => {
  const res = await fetch(url, {
    body: data ? JSON.stringify(data) : data,
    headers,
    method,
  });

  const resData = await res.json();

  return resData;
};

export const get = (url, headers = {}) => fetchData(url, null, 'GET', headers);

export const post = (url, body, headers = {}) =>
  fetchData(url, body, 'POST', headers);
