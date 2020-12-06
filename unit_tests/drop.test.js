import drop from '../src/drop'

const numbers = [1,2,3,4,5];
const defaultResult = [2,3,4,5];

test('test drop with negative index', () => {
    expect(drop(numbers, -1)).toStrictEqual(numbers);
})

test('test drop with outside array index', () => {
    expect(drop(numbers, 100000)).toStrictEqual([]);
})

// null is not a number so function should use the default value 1
// now it reads null to be 0
test('test drop with ', () => {
    expect(drop(numbers, null)).toStrictEqual(defaultResult);
})

test('test drop with outside array index', () => {
    expect(drop(numbers, undefined)).toStrictEqual(defaultResult);
})