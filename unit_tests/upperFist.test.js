import upperFirst from '../src/upperFirst'


test('test all lower case', () => {
    expect(upperFirst("karkkikauppa")).toBe("Karkkikauppa");
})

test('test with non-letter character', () => {
    expect(upperFirst("%juusto")).toBe("%juusto");
})

test('test all capital', () => {
    expect(upperFirst("MAKKARATEHDAS")).toBe("MAKKARATEHDAS");
})

test('empty string', () => {
    expect(upperFirst("")).toBe("");
})