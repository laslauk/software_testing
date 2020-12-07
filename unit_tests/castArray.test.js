
import castArray from '../src/castArray'

test('Cast an value 1 to array', () => {
    expect(castArray( 1)).toStrictEqual([1]);
})

test('Cast an object  to array', () => {
    expect(castArray( {"Makkara": 50})).toStrictEqual([ {"Makkara": 50}]);
})

test('Cast an null  to array', () => {
    expect(castArray( null)).toStrictEqual([null]);
})

test('Call castArray without arguments', () => {
    expect(castArray(castArray())).toStrictEqual([]);
})