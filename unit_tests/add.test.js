import add from '../src/add'

test('Add 5 + 2 to equal 7', () => {
    expect(add(5,2)).toBe(7);
})

test('Add -5 + -1 to be equal of -6', () => {
    expect(add(-5, -1)).toBe(-6);
})

// Tässä vähän villimpi testi hajottamaan? onko ok
test('add string + number to be type of a number', () => {
    expect(add(typeof("60" + 5))).toBe('number');
})

// Mitä mieltä oot, pitäiskö tän feilata, jos sille antaa vaan yhden parametrin?
test('add function with only one parameter 5', () => {
    expect(add(5)).toBe(5);
})

test('add 0 and 0 to be 0', () => {
    expect(add(0,0)).toBe(0);
})
