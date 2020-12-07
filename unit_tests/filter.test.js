import filter from '../src/filter'

const shoppingCart = [
    { 'item': 'chocolate', 'price': 12 },
    { 'item': 'tomato', 'price': 3 },
    { 'item': 'sausage', 'price': 6 },
    { 'item': 'milk', 'price': 1 },
    { 'item': 'bread', 'price': 2 },
    { 'item': 'tomato', 'price': 3 },
    { 'item': 'tomato', 'price': 1 },
]

const shoppingCartOnlyTomatoes = [
    { 'item': 'tomato', 'price': 3 },
    { 'item': 'tomato', 'price': 3 },
    { 'item': 'tomato', 'price': 1 },
]

test('test filter to find all correct values', () => {
    expect(filter(shoppingCart, ({ item }) => item == 'tomato')).toStrictEqual(shoppingCartOnlyTomatoes);
})

// Näkisin, että tässä ja vikassa sen pitäis palauttaa tyhjä taulukko []
// eikä taulukkoa taulukon sisällä [ Array[] ]. Sieltä tulee ilmeisesti
// not-arvoja taulukossa, jos ei oo mitään mitä palauttaa
test('test filter to search value not included into array', () => {
    expect(filter(shoppingCart, ({ item }) => item == 'soya')).toStrictEqual([]);
})

test('test filter with empty condition', () => {
    expect(filter(shoppingCart, {})).toStrictEqual([]);
})

test('test filter to find value from empty array', () => {
    expect(filter([], ({ item }) => item == 'tomato')).toStrictEqual([]);
})
