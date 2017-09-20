// a) write a function to take 2 variables as number range. print only numbers that are divisible by 2 & 3

const fizzBuzz_2_3 = (start, end) => {
  for (let i = start; i <= end; i++) {
    let f = i % 2 === 0;
    let b = i % 3 === 0;
    console.log((f ^ b) ? i : '');
  }
};
// fizzBuzz_2_3(1, 20);

// b) same requirement except print number that is power of 2

const fizzBuzz_p2 = (start, end) => {
  for (let i = start; i <= Math.sqrt(end); i++) {
    if (Math.pow(2, i) <= end) console.log(Math.pow(2, i));
  }
};
// fizzBuzz_p2(1, 100);

// c) Reverse a string
const reverse = (string, str = string.split('')) => {
  for (let i = 0; i <= Math.floor(str.length / 2); i++) {
    [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]];
  }
  return str.join('');
};
// console.log(reverse('hello'));
// d) write a function to increment version # string in the format of <major>>.<minor>.<feature>.<patch> with version as input in STRING…
//
// What can you bring to our scrappy culture
// Describe a time you had to convince others to adopt your idea.
//
//
// I was asked about <dd>, <dl> and <dt> tags which were something that had dropped out of my brain a while back.
