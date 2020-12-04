import camelCase from '../src/camelCase'

test('Enter all lower case', () => {
    expect(camelCase("keijolla on hyvä käsi")).toBe("keijollaOnHyväKäsi");
})

test('Enter only one word', () => {
    expect(camelCase("keijo")).toBe("keijo");
})

test('Enter all numbers strings', () => {
    expect(camelCase("1234")).toBe("1234");
})


test('Enter all numbers strings', () => {
    expect(camelCase("1234")).toBe("1234");
})

test('Test Foo Bar', () => {
    expect(camelCase("foo bar")).toBe("fooBar");
})

test('Test with special marks', () => {
    expect(camelCase("_-FOO_BAR-_")).toBe("fooBar");
})


test('Enter all capital', () => {
    expect(camelCase("KALLEN AUTOKAUPPA")).toBe("kallenAutokauppa");
})
