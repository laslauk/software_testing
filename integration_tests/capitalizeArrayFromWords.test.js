import capitalize from '../src/capitalize'
import words from '../src/words'


const products = "kaljaa, , kahvia, nakkeja, makkaraa, piimää, sipulia "
const expected = ["Kaljaa", "Kahvia", "Nakkeja", "Makkaraa", "Piimää", "Sipulia"];

test('Get an array of words and capitalize them', () => {   
    let wordArr = words(products);
    let capitalized =   wordArr.map(word => capitalize(word));
    expect(capitalized).toStrictEqual(expected);
});