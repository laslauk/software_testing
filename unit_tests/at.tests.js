import at from '../src/at'

const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
test("Input a valid object", () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3,4]);
})


test("Input an empty object", () => {
    expect(at({}, ['a[0].b.c', 'a[1]'])).toStrictEqual([]);
})


