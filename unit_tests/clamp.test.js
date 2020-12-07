import clamp from '../src/clamp'

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 */

 
test('Clamp -10 to be -5', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
})

test('Clamp 10 to be 5', () => {
    expect(clamp(10,-5, 5)).toBe(5);
})

 
test('Clamp 666 to be -1', () => {
    expect(clamp(666,-1, 700)).toBe(-1);
})

test('Clamp 0 to be 0', () => {
    expect(clamp(0, 0, 0)).toBe(0);
})