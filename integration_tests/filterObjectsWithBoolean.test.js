/*Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index, array).
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 * */

import capitalize from '../src/filter'
import words from '../src/isDate'
import isBoolean from '../src/isBoolean'
import filter from '../src/filter';

const productData = [
       { 'product': 'beer',     'in_stock': true },
       { 'product': 'coffee',   'in_stock': false },
       { 'product': 'bread',    'in_stock': null },
       { 'product': 'motoroil', 'in_stock': 'false' },
       { 'product': 'ice',      'in_stock': true },
       { 'product': 'bad_banana_data',   'in_stock': {data:'data'} },
       { 'product': 'glass',    'in_stock': 'true' },
       { 'product': 'tire',     'in_stock': 1 },
];
     
const exp =  [ 
{ product: 'beer', in_stock: true },
{ product: 'coffee', in_stock: false },
{ product: 'ice', in_stock: true }
 ];

test('Filter from data with only valid boolean flag', () => {
    
       let res = filter(productData, (
              (item) => {
             return isBoolean(item.in_stock);
       }));

       expect(exp).toStrictEqual(exp);
     
});

test('Filter from data with empty array', () => {
           let res = filter([], (
              (item) => {
             return isBoolean(item.in_stock);
       }));

       expect(exp).toStrictEqual(exp);
     
});