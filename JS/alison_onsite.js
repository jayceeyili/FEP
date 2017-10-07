/***************************************************************************************************
  Given an integer input representing phone numbers, generate all the combinations.
  {0: ‘’,
  1: ‘’,
  2:’abc’,
  ……}

  next Level: what if you already have a dictionaray and you only want words that exist in it?
***************************************************************************************************/
const map = {
  0: '',
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

const numberToWords = num => {
  let str = num.toString();
  let result = [];
  if (str.length === 1) {
    let things = map[str.charAt(0)];
    for (let i = 0; i < things.length; i++) {
      result.push(things[i]);
    }
    return result;
  }

  let rests = numberToWords(parseInt(str.slice(1)));
  if (str.charAt(0) === '1') {
    return rests;
  } else {
    let chars = map[str.charAt(0)];
    for (let k = 0; k < chars.length; k++) {
      let temp = chars.charAt(k);
      for (let j = 0; j < rests.length; j++) {
        result.push(temp.concat(rests[j]))
      }
    }
    return result;
  }
};

console.log(numberToWords(364));
/***************************************************************************************************
  input: text(type: space separated words in string format), limit(integer),
  find the top limit number of words in the text, return the result in an array, use O(n) time.

***************************************************************************************************/
