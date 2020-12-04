import isSymbol from '../src/isSymbol'

test('Enter a symbol', () => {
    expect(isSymbol(Symbol.iterator)).toBeTruthy();
})


test('Enter a symbol', () => {
    expect(isSymbol("abc")).toBeFalsy();
})

