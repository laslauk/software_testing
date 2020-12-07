import isArguments from '../src/isArguments.js'



test('test if isArguments equals TRUE', () => {
    expect(isArguments(function() { return arguments }())).toBe(true);
})

test('test if isArguments [1, 2, 3] to be  FALSE', () => {
    expect(isArguments([1, 2, 3])).toBe(false);
})



test('test if isArguments([]) to be  FALSE', () => {
    expect(isArguments([])).toBe(false);
})


