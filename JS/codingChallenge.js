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

// write a function to increment version # string in the format of <major>>.<minor>.<feature>.<patch>
// with version as input in STRING and index (0-major, 1 - minor, 2 - feature, etc)
// to update as parameters. restart subsequent version to zero. i.e.
// if increment <minor>, zero or restart <feature> & <patch> version.
const upgrade = (version, index) => {
  let [major, minor, feature, patch] = version.split('.');

  switch (index) {
    case 0:
      major = parseInt(major) + 1;
      return [major, '0', '0', '0'].join('.');
    case 1:
      minor = parseInt(minor) + 1;
      return [major, minor, '0', '0'].join('.');
    case 2:
      feature = parseInt(feature) + 1;
      return [major, minor, feature, '0'].join('.');
    case 3:
      patch = parseInt(patch) + 1;
      return [major, minor, feature, patch].join('.');
    default:
      return version;
  }
};
console.log(upgrade('1.4.65.2', 1));
