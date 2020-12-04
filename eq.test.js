const eq = require('./src/eq');

const object1 = { 'a': 1 }
const object2 = { 'a': 1 }

test('successful equal check with the result true', () => {
  expect(eq(object1, object1)).toBe(true);
});

test('successful equal check with the result false', () => {
  expect(eq(object1, object2)).toBe(false);
});