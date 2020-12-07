import difference from '../src/difference';

const numbers1 = [1,2,3,4,5];
const numbers2 = [1,2,3,4,6];
const result = [5];

test('test differences between numbers1 and numbers2', () => {
    expect(difference(numbers1, numbers2)).toStrictEqual(result);
})

test('test differences between same set of numbers', () => {
    expect(difference(numbers1, numbers1)).toStrictEqual([]);
})