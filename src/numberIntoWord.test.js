import numberToWord from './numberToWord'


describe("Convert Number Into Words", ()=>{
 
  test('0 to 19 numbers now expect 4 in word', () => {
      expect(numberToWord(4)).toBe("four");
  });

  test('0 to 19 numbers now expect 10 in word', () => {
    expect(numberToWord(10)).toBe("ten");
  });

  test('0 to 19 numbers now expect 17 in word', () => {
    expect(numberToWord(17)).toBe("seventeen");
  });

})
