const numberIntoWord = number => {
    const numString=number.toString(),
     units=[
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
],

tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

   /* Is number zero? */
   if (parseInt(numString, 10) === 0) {
    return "zero";
  }

let word;

if(parseInt(number)>19)
{
    word=tens[parseInt(numString[0])];
    return word += " "+ units[parseInt(numString[1],10)]
}else{
    return units[parseInt(number,10)];
}  
}

export default numberIntoWord;