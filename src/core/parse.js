export function parse(value = '') {
  if (value.startWidth('=')) {
    try {
      return eval(value.slice(1));
    } catch (err) {
      console.warn(err);
    }
  }
  return value;
}
