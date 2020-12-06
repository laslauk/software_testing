import isEmpty from '../src/isEmpty'

/* TRUE */
test('test if isEmpty -2 equals TRUE', () => {
    expect(isEmpty(-2)).toBe(true);
})

test('test if isEmpty [] equals TRUE', () => {
    expect(isEmpty([])).toBe(true);
})

test('test if isEmpty undefined equals TRUE', () => {
    expect(isEmpty(undefined)).toBe(true);
})

test('test if isEmpty "" equals TRUE', () => {
    expect(isEmpty("")).toBe(true);
})


/* FALSE */
test('test if isEmpty "" equals FALSE', () => {
    expect(isEmpty([ {0:'a'} ])).toBe(false);
})

test('test if isEmpty [{}] equals FALSE', () => {
    expect(isEmpty([{}])).toBe(false);
})