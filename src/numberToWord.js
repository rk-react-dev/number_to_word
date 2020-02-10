const numberIntoWord = number => { 
    const numString=number.toString(),
    /* Array of units as words */
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
/* Array of tens as words */
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
  ],

  scales=["hundred"]

  /* Is number is not positive number? */
  if(parseInt(numString,10) === NaN || parseInt(numString,10) < 0)
  {
      return "Is not a number"
  }
   /* Is number zero? */
   if (parseInt(numString, 10) === 0) {
    return "zero";
  }

let words=[],word, ints;

/* split number string into array of integer in reverse*/
 ints = numString
        .split("")
        .reverse()
        .map(parseFloat);

if (ints[1] === 1) {
    ints[0] += 10;
 }

 /* add unit word if array item exists */
 if (units[ints[0]]) {
    word = units[ints[0]];
    words.push(word);
  }

  if (tens[ints[1]]) {
    word = tens[ints[1]];
    words.push(word);
  }

  if (units[ints[2]]) {
    word = units[ints[2]];
    words.push(word + " " + scales[0]);
  }

return words.reverse().join(" ");
}

export default numberIntoWord;