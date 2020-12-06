import slice from '../src/slice'
import toInteger from '../src/toInteger.js'

const numbers = [1,2,3,4,5];
const defaultResult = [2,3,4,5];
const customResult = [4,5] // 3:lla

function mockDrop1(array, n=1) {
    const length = array == null ? 0 : array.length
    return length
        ? slice(array, n < 0 ? 0 : n, length)
        : []
}

test('test if drop can handle broken toInteger', () => {
    expect(mockDrop1(numbers, "3hj")).toStrictEqual([]);
})
