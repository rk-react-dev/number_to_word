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

  scales = ["hundred", "thousand", "lakh", "crore"];
  /* Is number is not positive number? */
  if(parseInt(numString,10) < 0)
  {
      return "Given number is negative number"
  }
   /* Is number zero? */
   if (parseInt(numString, 10) === 0) {
    return "zero";
  }

 let start = numString.length,
  chunks=[], end, chunksLen, words, i, chunk, word, ints;

  /* split into chunks 3 and 2 digit */
  while (start > 0) {
    end = start;
    if (start === numString.length) {
      chunks.push(numString.slice((start = Math.max(0, start - 3)), end));
    } else {
      chunks.push(numString.slice((start = Math.max(0, start - 2)), end));
    }
  }

chunksLen = chunks.length;
/* if number gretor than scales then return blank string */
if (chunksLen > scales.length) {
    return "";
}
words=[];

for (i = 0; i < chunksLen; i++) {
chunk = parseInt(chunks[i], 10);
if (chunk) {
/* split number string into array of integer in reverse*/
 ints = chunks[i].split("").reverse().map(parseFloat);

if (ints[1] === 1) {
    ints[0] += 10;
 }

 /* add unit word if array item exists */
 if (units[ints[0]]) {
    word = units[ints[0]];
    word = i !== 0 ? word + " " + scales[i] : word;
    words.push(word);
  } else if(chunksLen > 1) {
    word = scales[i];
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
}
}
return words.reverse().join(" ");
}

export default numberIntoWord;