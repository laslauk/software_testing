import divide from '../src/divide';

test('divide 4 with 2', () => {
    expect(divide(4, 2)).toBe(2);
})

test('divide 5 with 10', () => {
    expect(divide(5, 10)).toBe(0.5);
})

test('divide 6 with 4', () => {
    expect(divide(6, 4)).toBe(1.5);
})

test('divide -6 with 3', () => {
    expect(divide(-6, 3)).toBe(-2);
})

test('divide 6 with -3', () => {
    expect(divide(6, -3)).toBe(-2);
})