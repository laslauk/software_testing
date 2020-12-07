import defaultTo from '../src/defaultTo';

test('test defaultTo with accepted values', () => {
    expect(defaultTo(1, 10)).toBe(1);
})

test('test defaultTo with undefined value', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
})

test('test defaultTo with NaN value', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
})

test('test defaultTo with null value', () => {
    expect(defaultTo(null, 10)).toBe(10);
})