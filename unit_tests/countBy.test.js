import countBy from '../src/countBy';

const products = [
    { 'product': 'bread', 'inCart': true },
    { 'product': 'chocolate', 'inCart': false },
    { 'product': 'milk', 'inCart': true },
    { 'product': 'sausage', 'inCart': true },
    { 'product': 'popcorn', 'inCart': false },
]

test('test with 3 true and 2 false values', () => {
    expect(countBy(products, value => value.inCart)).toBe({ 'true': 3, 'false': 2 });
})