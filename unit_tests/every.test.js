 import every from '../src/every'

 let array_untrue = [true, 1, null, 'yes'];
 let array_true = [1, true, true, 1,1];

 test("test falsy array", () => {
    expect(every(array_untrue, Boolean)).toBeFalsy();
  });


  test("test truthful array", () => {
    expect(every(array_true, Boolean)).toBeTruthy();
  });
