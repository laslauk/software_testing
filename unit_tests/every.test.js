/**
 * Checks if `predicate` returns truthy for **all** elements of `array`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * **Note:** This method returns `true` for
 * [empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty arrays.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */

 import every from '../src/every'

 let array_untrue = [true, 1, null, 'yes'];
 let array_true = [1, true, true, 1,1];

 test("test falsy array", () => {
    expect(every(array_untrue, Boolean)).toBeFalsy();
  });


  test("test truthful array", () => {
    expect(every(array_true, Boolean)).toBeTruthy();
  });