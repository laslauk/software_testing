import words from '../src/words'


test('Enter an array with special makrs:', () => {
    expect(words("keijo, nakit, kioski, alennus -  % juustohamppareista !! vau %?? ok"))
    .toStrictEqual(["keijo", "nakit","kioski", "alennus","juustohamppareista", "vau", "ok"]);
})


test('Test regex to get all capital lettered words, with extra spaces ', () => {
    expect(words("PERTTI on AUTO    123 korjaamol la töisSä auto MEKAANIKKO na", /\b[A-Z]+\b/g))
    .toStrictEqual(["PERTTI", "AUTO", "MEKAANIKKO"]);
})

