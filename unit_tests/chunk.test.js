import chunk from '../src/chunk.js'

test('Chunk array to 2 even groups', () => {
    expect( chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
});

test('Chunk array to groups of 3 with one remaining', () => {
    expect( chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
});



test('Chunk array an empty array to equal empty', () => {
    expect( chunk([], 3)).toStrictEqual([]);
});


test('Chunk with default value 1', () => {
    expect( chunk(['a', 'b', 'c', 'd'])).toStrictEqual([['a'], ['b'], ['c'], ['d']]);
});

