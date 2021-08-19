// sorting array using .array

const numbers = [1, 2, 5, 4, 3, 7, 6];
const sortNumbers = numbers.sort();
// console.log(numbers);

const friends = ['aaruk', 'baruf', 'cambu', 'dabli'];
// const sortedF = friends.sort();
// console.log(sortedF)
// const reversedF = friends.reverse();
// console.log(reversedF)


// sorting and reversing together
const sortedReverseFriends = friends.sort().reverse();
// console.log(sortedReverseFriends);


// number sorting fun

const bigNumbers = [44, 56, 57, 78, 89, 99, 12, 34, 2];
const sortedBigNum = bigNumbers.sort(function(a, b) {
    return a - b;
})
console.log(sortedBigNum)