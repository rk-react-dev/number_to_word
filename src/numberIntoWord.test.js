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
  
  test('should return 20222 in word', () => {
    expect(numberToWord(20222).trim()).toBe("twenty thousand two hundred twenty two");
  });

  test('should return 99222 in word', () => {
    expect(numberToWord(99222).trim()).toBe("ninety nine thousand two hundred twenty two");
  });
  
  test('should return 999999 in word', () => {
    expect(numberToWord(999999).trim()).toBe("nine lakh ninety nine thousand nine hundred ninety nine");
  });
  
  test('should return 99999932 in word', () => {
    expect(numberToWord(99999932).trim()).toBe("nine crore ninety nine lakh ninety nine thousand nine hundred thirty two");
  });

  test('for negative numbers should be Given number is negative number', () => {
    expect(numberToWord(-1)).toBe("Given number is negative number");
  }); 
  test('should return blank string if number is more than 9 digit', () => {
    expect(numberToWord(9999999999)).toBe("");
  }); 
  
})
