import defaultToAny from '../src/defaultToAny.js'



test('DefaultToAny with (1,10,20) to return 1', () => {
    expect(defaultToAny(1,10,20)).toBe(1);
})


test('DefaultToAny with (undefined, null,5, Nan) to return 5', () => {
    expect(defaultToAny(undefined, null, 5, NaN)).toBe(5);
})


test('DefaultToAny with (5, 10, undefined) to return 5', () => {
    expect(defaultToAny(5, 10, undefined)).toBe(5);
})

test('DefaultToAny with (1) to return 1', () => {
    expect(defaultToAny(1)).toBe(1);
})
