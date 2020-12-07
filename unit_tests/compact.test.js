import compact from '../src/compact';

test('test with only accepted values included', () => {
    expect(compact([1, 2, 3])).toBe([1, 2, 3]);
})

test('test with 0, false and empty values included', () => {
    expect(compact([0, 1, false, 2, '', 3])).toBe([1, 2, 3]);
})

test('test with null and undefined values included', () => {
    expect(compact([1, null, undefined, -2, 3])).toBe([1, -2, 3]);
})