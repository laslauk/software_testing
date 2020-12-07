import reduce from '../src/reduce';

test('test reduce with array containing excepted values', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
})

test('test reduce with object containing excepted values', () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
         return result
         }, {})).toStrictEqual({ '1': ['a', 'c'], '2': ['b'] });
})