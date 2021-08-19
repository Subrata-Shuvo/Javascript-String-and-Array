// slicing an array as array using .slice
// but slice won't slice the previous array,, every time 
const numbers = [3, 4, 5, 6, 7, 8, 14, 15, 21, 34, 45];
const numberSliced = numbers.slice(4, 9);
console.log(numberSliced);




// splice to remove an element from an array 
// splicing an array as array using .splice
// it helps to splice the array item usisng index number and quantity to splice

// to know that the array has been spliced we need to console twice

const numberSpliced = numbers.splice(4, 2)
console.log(numberSpliced)
console.log(numbers)


// // we can add items to array using splice also after declaring the index number and quantity to splice  
const numberSpliced2 = numbers.splice(4, 3, 55, 234, 89, 7777);
console.log(numberSpliced2)
console.log(numbers)