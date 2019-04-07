export function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

export function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

export function debounce(fn, delay = 100) {
  let timer = null;
  return function debounceFn() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn();
    }, delay);
  };
}

export function memoryFn(fn) {
  let result = null;
  return function memoriedFn() {
    if (result) {
      return result;
    }
    return (result = fn());
  };
}
