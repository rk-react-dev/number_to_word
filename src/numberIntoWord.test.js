import numberToWord from './numberToWord'


describe("Convert Number Into Words", ()=>{
 
  test('should return 0 in word', () => {
        expect(numberToWord(0)).toBe("zero");
  });

  test('should return 4 in word', () => {
      expect(numberToWord(4)).toBe("four");
  });

  test('should return 10 in word', () => {
    expect(numberToWord(10)).toBe("ten");
  });

  test('should return 17 in word', () => {
    expect(numberToWord(17)).toBe("seventeen");
  });

  test('should return 20 in word', () => {
      expect(numberToWord(20).trim()).toBe("twenty");
  });

  test('should return 99 in word', () => {
    expect(numberToWord(99).trim()).toBe("ninety nine");
  });

  test('should return 205 in word', () => {
    expect(numberToWord(205).trim()).toBe("two hundred five");
  });

  test('should return 999 in word', () => {
    expect(numberToWord(999).trim()).toBe("nine hundred ninety nine");
  });
  
  test('for negative numbers should be Is not a number', () => {
    expect(numberToWord(-1)).toBe("Is not a number");
  }); 
})
