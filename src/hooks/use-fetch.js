/**
 * Make an HTTP request.
 *
 * @param {String} url Request URL.
 * @param {Object} [body = null] Object contains request data.
 * @param {String} [method = "GET"] Request method.
 * @param {Object} [headers = {}] Object contains request headers.
 *
 * @returns Promise fulfilled with response data.
 */

const useFetch = async (url, data = null, method = "GET", headers = {}) => {
  try {
    const res = await fetch(url, {
      method,
      body: data ? JSON.stringify(data) : data,
      headers,
    });

    const resData = await res.json();

    return resData;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default useFetch;
