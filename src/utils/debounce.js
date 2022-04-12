/**
 * Debounce function for scroll events.
 *
 * @param {Function} func Function to execute.
 * @param {Number} timeout Delay time.
 *
 * @return {Function}
 */
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export default debounce;
