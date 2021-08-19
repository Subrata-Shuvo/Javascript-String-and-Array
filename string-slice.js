// slice by using the gap

const case1 = 'Good Boy Playing with Js';

const words = case1.split(' ');
// console.log(words)

// slice using a specific letter
const withoutO = case1.split('o');
console.log(withoutO)

// slice by using the index number

const smallSlice = case1.slice(5, 10);
console.log(smallSlice)


// substr - starts from a index and ends to the commanded index

const anotherPart = case1.substr(5, 8);
console.log(anotherPart)


// substring

const anotherString = case1.substring(11, 15);
console.log(anotherString)

// concat --- adding two string

const first = 'Good';
const second = 'boy';

/* way 1 to add two string
 const total = first + second 
 console.log(total)
 */

// way 2 using -- immutable - helps to add string defined and also undefined
const total = first.concat(second).concat(' is').concat(' playing').concat(' cricket');
console.log(total)

const word1 = ['shuvo', 'sresty', 'k', 'onk', 'valobase'];

// const joined = word1.join('');
// const joined = word1.join(',');
// const joined = word1.join(', ');
// const joined = word1.join('-');

const joined = word1.join(' ');
console.log(joined);