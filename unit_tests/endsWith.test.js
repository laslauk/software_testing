import endsWith from '../src/endsWith'

test('test if abc ends with c', () => {
    expect(endsWith('abc', 'c')).toBe(true);
})

test('test if abc ends with -', () => {
    expect(endsWith('abc', '-')).toBe(false);
})

test('test if abc ends with b', () => {
    expect(endsWith('abc', 'b')).toBe(false);
})

test('test if abc ends with b', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
})