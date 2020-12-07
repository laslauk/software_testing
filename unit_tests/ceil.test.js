import createRound from '../src/ceil'


test('test 4.006 to be 5 with no decimals', () => {
    expect(createRound(4.006)).toBe(5);
});

test('test 6.004 to be 6.01 with two decimal', () => {
    expect(createRound(6.004,2)).toBe(6.01);
});

test('test 6040 to be 6100 with 2nd precision', () => {
    expect(createRound(6040,-2)).toBe(6100);
});

test('test 105 to be 105 with 0 precision', () => {
    expect(createRound(105,0)).toBe(105);
});

test('test 0.000000000001 to be 1 with 0 precision', () => {
    expect(createRound(0.00000000001 ,0)).toBe(1);
});

test('test -5.1928 to be -5.192 with 2 precision', () => {
    expect(createRound(-5.1928, 2)).toBe(-5.19);
});